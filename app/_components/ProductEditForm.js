import updateProduct from "../actions/updateProduct";

function ProductEditForm({ product }) {
  const updateProductById = updateProduct.bind(null, product._id);

  return (
    <form action={updateProductById} className="p-4">
      <h2 className="mb-6 text-center text-3xl font-semibold">
        {product.name}
      </h2>

      <div className="mb-4">
        <label htmlFor="type" className="mb-2 block font-bold text-gray-700">
          商品種類
        </label>
        <select
          name="type"
          className="w-full rounded border px-3 py-2"
          required
          defaultValue={product.type}

          //   onChange={handleChange}
        >
          <option value="Living room">客廳傢俱</option>
          <option value="Bedroom items">臥室物品</option>
          <option value="House gadgets">家居小物</option>
          <option value="Outdoor">戶外部品</option>
          <option value="Sofa chair">沙發、椅子</option>
          <option value="Storage">儲物傢俱</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block font-bold text-gray-700">
          商品名稱
        </label>
        <input
          type="text"
          name="name"
          className="mb-2 w-full rounded border px-3 py-2"
          placeholder="eg. Beautiful Apartment In Miami"
          required
          defaultValue={product.name}
          //   onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="mb-2 block font-bold text-gray-700"
        >
          商品描述
        </label>
        <textarea
          name="description"
          className="w-full rounded border px-3 py-2"
          rows="4"
          placeholder="Add an optional description of your property"
          defaultValue={product.description}
          //   onChange={handleChange}
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700">售價</label>
        <input
          type="number"
          id="price"
          name="price"
          className="mb-2 w-full rounded border px-3 py-2"
          placeholder=""
          required
          defaultValue={product.price}
          //   onChange={handleChange}
        />
      </div>

      {/* <div className="mb-4">
        <label htmlFor="images" className="mb-2 block font-bold text-gray-700">
          上傳圖片 (最多 3 張圖片)
        </label>
        <input
          type="file"
          id="images"
          name="images"
          className="w-full rounded border px-3 py-2"
          accept="image/*"
          multiple
          required
          onChange={handleImagesChange}
        />
      </div> */}

      <div>
        <button
          className="focus:shadow-outline w-full rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none"
          type="submit"
        >
          修改商品
        </button>
      </div>
    </form>
  );
}

export default ProductEditForm;
