import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { BiImageAdd, BiTrash, BiVideoPlus } from 'react-icons/bi';

const AddProduct = () => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoPreview, setVideoPreview] = useState(null);
  const [categories] = useState([
    'Electronics',
    'Books',
    'Clothing',
    'Home Appliances',
    'Sports',
  ]);

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required('Product name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number()
      .required('Price is required')
      .positive('Price must be a positive number'),
    images: Yup.array().min(1, 'At least one image is required'),
    video: Yup.mixed().nullable().required('A video is required'),
    category: Yup.string().required('Category is required'),
  });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log('Product data:', data);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => file.type.startsWith('image/'));
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
    setValue(
      'category',
      control._formValues.category === category ? '' : category,
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full rounded-lg bg-white p-8 md:w-full lg:w-full xl:w-full">
        <h2 className="mb-6 text-2xl font-bold">Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full pr-2 md:w-3/4">
              <label className="mb-2 block text-gray-700">0 of 12 images</label>
              <div className="relative flex h-64 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                <input
                  type="file"
                  multiple
                  className="absolute inset-0 cursor-pointer opacity-0"
                  onChange={handleImageChange}
                />
                <span className="text-lg text-gray-400">
                  <BiImageAdd />
                </span>
                <span className="text-lg text-gray-400">Add photos</span>
              </div>
              {errors.images && (
                <span className="text-sm text-red-500">
                  {errors.images.message}
                </span>
              )}
              <div className="mt-4 flex flex-wrap gap-4">
                {imagePreviews.map((src, index) => (
                  <div key={index} className="relative h-24 w-24">
                    <img
                      src={src}
                      alt={`Preview ${index}`}
                      className="h-full w-full rounded-lg object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute right-0 top-0 flex h-6 w-6 items-center justify-center text-red-500 hover:text-red-700"
                    >
                      <BiTrash />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full pl-2 md:w-1/4">
              <label className="mb-2 block text-gray-700">0 of 1 video</label>
              <div className="relative flex h-64 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                <input
                  type="file"
                  className="absolute inset-0 cursor-pointer opacity-0"
                  onChange={handleVideoChange}
                />
                <span className="text-lg text-gray-400">
                  <BiVideoPlus />
                </span>
                <span className="text-lg text-gray-400">Add Video</span>
              </div>
              {errors.video && (
                <span className="text-sm text-red-500">
                  {errors.video.message}
                </span>
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
                    className="absolute right-0 top-0 flex h-6 w-6 items-center justify-center text-red-500 hover:text-red-700"
                  >
                    <BiTrash />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full pr-2 md:w-1/2">
              <label className="mb-2 block text-gray-700">Product Name</label>
              <input
                type="text"
                name="productName"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none"
                {...register('productName')}
                placeholder="Product Name"
              />
              {errors.productName && (
                <span className="text-sm text-red-500">
                  {errors.productName.message}
                </span>
              )}
            </div>
            <div className="w-full pr-2 md:w-1/2">
              <label className="mb-2 block text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none"
                {...register('price')}
                placeholder="Price"
              />
              {errors.price && (
                <span className="text-sm text-red-500">
                  {errors.price.message}
                </span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-gray-700">Description</label>
            <textarea
              name="description"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none"
              {...register('description')}
              rows="6"
            ></textarea>
            {errors.description && (
              <span className="text-sm text-red-500">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-gray-700">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <span
                  key={index}
                  onClick={() => handleCategorySelect(category)}
                  className={`cursor-pointer rounded-full px-4 py-2 ${
                    control._formValues.category === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
            {errors.category && (
              <span className="text-sm text-red-500">
                {errors.category.message}
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-12 block w-1/2 rounded-full bg-green-700 py-3 font-medium text-white transition hover:bg-green-800"
            >
              List it
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 block w-1/2 rounded-full border border-gray-300 bg-gray-50 py-3 font-medium text-black transition hover:bg-gray-100"
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
