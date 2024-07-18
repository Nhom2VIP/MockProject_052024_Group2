import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { BiImageAdd, BiTrash, BiVideoPlus } from 'react-icons/bi';

const AddProduct = () => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoPreview, setVideoPreview] = useState(null);
  const [categories] = useState([
    'Electronics', 'Books', 'Clothing', 'Home Appliances', 'Sports'
  ]);

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required('Product name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required').positive('Price must be a positive number'),
    images: Yup.array().min(1, 'At least one image is required'),
    video: Yup.mixed().nullable().required('A video is required'),
    category: Yup.string().required('Category is required')
  });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    console.log('Product data:', data);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => file.type.startsWith('image/'));
    const newImagePreviews = [];

    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImagePreviews.push(reader.result);
        if (newImagePreviews.length === validFiles.length) {
          setImagePreviews([...imagePreviews, ...newImagePreviews]);
        }
      };
      reader.readAsDataURL(file);
    });

    setValue('images', [...(control._formValues.images || []), ...validFiles]);
  };

  const handleRemoveImage = (index) => {
    const newImagePreviews = [...imagePreviews];
    const newImages = [...(control._formValues.images || [])];

    newImagePreviews.splice(index, 1);
    newImages.splice(index, 1);

    setImagePreviews(newImagePreviews);
    setValue('images', newImages);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setValue('video', file);
    }
  };

  const handleRemoveVideo = () => {
    setVideoPreview(null);
    setValue('video', null);
  };

  const handleCategorySelect = (category) => {
    setValue('category', control._formValues.category === category ? '' : category);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-full md:w-full lg:w-full xl:w-full">
        <h2 className="text-2xl font-bold mb-6">Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-3/4 pr-2">
              <label className="block text-gray-700 mb-2">0 of 12 images</label>
              <div className="relative w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer">
                <input
                  type="file"
                  multiple
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
                <span className="text-gray-400 text-lg"><BiImageAdd /></span>
                <span className="text-gray-400 text-lg">Add photos</span>
              </div>
              {errors.images && (
                <span className="text-red-500 text-sm">{errors.images.message}</span>
              )}
              <div className="flex flex-wrap gap-4 mt-4">
                {imagePreviews.map((src, index) => (
                  <div key={index} className="relative w-24 h-24">
                    <img src={src} alt={`Preview ${index}`} className="object-cover w-full h-full rounded-lg" />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 right-0 text-red-500 hover:text-red-700 w-6 h-6 flex items-center justify-center"
                    >
                      <BiTrash />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/4 pl-2">
              <label className="block text-gray-700 mb-2">0 of 1 video</label>
              <div className="relative w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleVideoChange}
                />
                <span className="text-gray-400 text-lg"><BiVideoPlus /></span>
                <span className="text-gray-400 text-lg">Add Video</span>
              </div>
              {errors.video && (
                <span className="text-red-500 text-sm">{errors.video.message}</span>
              )}
              {videoPreview && (
                <div className="relative mt-4">
                  <video
                    src={videoPreview}
                    controls
                    className="w-full rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveVideo}
                    className="absolute top-0 right-0 text-red-500 hover:text-red-700 w-6 h-6 flex items-center justify-center"
                  >
                    <BiTrash />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2 pr-2">
              <label className="block text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                name="productName"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                {...register('productName')}
                placeholder="Product Name"
              />
              {errors.productName && (
                <span className="text-red-500 text-sm">{errors.productName.message}</span>
              )}
            </div>
            <div className="w-full md:w-1/2 pr-2">
              <label className="block text-gray-700 mb-2">Price</label>
              <input
                type="number"
                name="price"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                {...register('price')}
                placeholder="Price"
              />
              {errors.price && (
                <span className="text-red-500 text-sm">{errors.price.message}</span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              {...register('description')}
              rows="6"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">{errors.description.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <span
                  key={index}
                  onClick={() => handleCategorySelect(category)}
                  className={`cursor-pointer px-4 py-2 rounded-full ${
                    control._formValues.category === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
            {errors.category && (
              <span className="text-red-500 text-sm">{errors.category.message}</span>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="block w-1/2 py-3 mt-12 text-white rounded-full bg-green-700 hover:bg-green-800 transition font-medium"
            >
              List it
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="block w-1/2 py-3 mt-4 text-black rounded-full border border-gray-300 bg-gray-50 hover:bg-gray-100 transition font-medium"
            >
              Save for later
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
