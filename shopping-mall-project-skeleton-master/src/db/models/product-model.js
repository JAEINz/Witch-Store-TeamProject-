/*model의 역할
데이터 베이스에 접근하는 로직을 작성하는 곳
db에 접근하는 로직만!!!담겨있음 다른건 ㄴㄴ*/

import { model } from 'mongoose';
import { ProductSchema } from '../schemas/product-schema';


const Product = model('products', ProductSchema);

export class ProductModel {
    
    // 1. 전체 상품 조회
    async findAllProducts() {
        const productList = await Product.find({});
        return productList;
    }

        // 2. 카테고리별 상품 조회
        async findByCategory(info){
            const productList = await Product.find(info);
            return productList;
        }
        
        // 3. 상품 상세 정보
    async findById(productId) {
      const findById = await Product.find(productId);
        return findById;
    }
            // 4. 상품 등록 (추가) ??
    async create(productInfo) {
        const createdNewProduct = await Product.create(productInfo);

        return createdNewProduct;
    }

        // 5. 상품 수정
        async updateProduct(productId) {
            const filter = {_id: productId};
            const option = { returnOriginal : false };
    
            const updatedProduct = await Product.findByIdAndUpdate(productId, update, option).exec();
            return updatedProduct;
        }
    
            // 6. 상품 삭제
    async delete({ productId }) {
        const filter = { productId };
        //findOneAndDelete
        return await Product.deleteOne(filter);
    }

    }


    const productModel = new ProductModel();

export { productModel }