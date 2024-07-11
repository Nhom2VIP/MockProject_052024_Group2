import React, { useState } from 'react';
import { BiImageAdd, BiTrash, BiVideoPlus } from 'react-icons/bi';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    images: [],
    video: null,
    category: ''
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoPreview, setVideoPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [categories] = useState([
    'Electronics', 'Books', 'Clothing', 'Home Appliances', 'Sports'
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.productName) newErrors.productName = 'Product name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (formData.images.length === 0) newErrors.images = 'At least one image is required';
    if (!formData.category) newErrors.category = 'Category is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
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

    setFormData({
      ...formData,
      images: [...formData.images, ...validFiles],
    });
  };

  const handleRemoveImage = (index) => {
    const newImagePreviews = [...imagePreviews];
    const newImages = [...formData.images];

    newImagePreviews.splice(index, 1);
    newImages.splice(index, 1);

    setImagePreviews(newImagePreviews);
    setFormData({
      ...formData,
      images: newImages,
    });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setFormData({
        ...formData,
        video: file,
      });
    }
  };

  const handleRemoveVideo = () => {
    setVideoPreview(null);
    setFormData({
      ...formData,
      video: null,
    });
  };

  const handleCategorySelect = (category) => {
    setFormData({
      ...formData,
      category: formData.category === category ? '' : category,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Product data:', formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white rounded-lg p-8 w-full md:w-full lg:w-full xl:w-full">
      <h2 className="text-2xl font-bold mb-6">Add Product</h2>
      <form onSubmit={handleSubmit}>
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
              <span className="text-red-500 text-sm">{errors.images}</span>
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
              value={formData.productName}
              onChange={handleChange}
              placeholder="Product Name"
            />
            {errors.productName && (
              <span className="text-red-500 text-sm">{errors.productName}</span>
            )}
          </div>
          <div className="w-full md:w-1/2 pr-2">
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="number"
              name="price"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
            />
            {errors.price && (
              <span className="text-red-500 text-sm">{errors.price}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            value={formData.description}
            onChange={handleChange}
            rows="6"
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">{errors.description}</span>
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
                  formData.category === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </span>
            ))}
          </div>
          {errors.category && (
            <span className="text-red-500 text-sm">{errors.category}</span>
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
