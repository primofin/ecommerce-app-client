import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers, FieldArray } from 'formik'

import { AppState } from '../../types'
import { adminUpdateProduct } from '../../redux/actions/product'
import AddProductSchema from '../AddProductForm/validate'
import './updateProductForm.scss'

type Values = {
  productName: string
  price: number
  images: string[]
  description: string
  category: string
  variants: string[]
  size: string | number
}
type ProductParams = {
  productId: string
}
const UpdateProductForm = () => {
  const { productId } = useParams<ProductParams>()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
  const products = useSelector((state: AppState) => state.product.items)
  const product = products.find((product) => product._id === productId)
  if (!product) {
    return <div>Product not found</div>
  }
  return (
    <div className="">
      <div className="form__title update-product__form__title">
        Update the product
      </div>
      {isLoggedIn && (
        <Formik
          initialValues={{
            productName: product.name,
            price: product.price,
            images: product.images,
            description: product.description ? product.description : '',
            category: product.category,
            variants: product.variants ? product.variants : [''],
            size: product.size,
          }}
          validationSchema={AddProductSchema}
          onSubmit={async (
            values,
            { setSubmitting, resetForm }: FormikHelpers<Values>
          ) => {
            const {
              productName,
              price,
              images,
              description,
              category,
              variants,
              size,
            } = values
            dispatch(
              adminUpdateProduct(
                productId,
                productName,
                price,
                images,
                description,
                category,
                variants,
                size
              )
            )
            alert('The product is updated')
            setSubmitting(false)
            resetForm()
          }}
        >
          {({ isSubmitting, values, errors, touched }) => (
            <Form className="form__content update-product__form__content">
              <label htmlFor="productName" className="form__content__label">
                *Name:
              </label>
              <Field
                required
                id="productName"
                placeholder="V-neck shirt"
                name="productName"
                className="form__content__input"
              />
              {errors.productName && touched.productName ? (
                <div className="form__content__error">{errors.productName}</div>
              ) : null}
              <label htmlFor="price" className="form__content__label">
                *Price <span>(e)</span>:
              </label>
              <Field
                required
                type="number"
                id="price"
                name="price"
                className="form__content__input"
              />
              {errors.price && touched.price ? (
                <div className="form__content__error">{errors.price}</div>
              ) : null}
              <label className="form__content__label">*Images (links):</label>
              <FieldArray name="images">
                {({ insert, remove, push }) => (
                  <div>
                    {values.images.length > 0 &&
                      values.images.map((image, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            {/* <label htmlFor={`friends.${index}`}>Name</label> */}
                            <Field
                              required
                              name={`images.${index}`}
                              placeholder="https://imgur.com/O4osup3"
                              type="text"
                            />
                          </div>
                          <div className="col">
                            <button type="button" onClick={() => remove(index)}>
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button type="button" onClick={() => push('')}>
                      Add link
                    </button>
                  </div>
                )}
              </FieldArray>
              {errors.images && touched.images ? (
                <div className="form__content__error">{errors.images}</div>
              ) : null}
              <label htmlFor="description" className="form__content__label">
                Description:
              </label>
              <Field
                id="description"
                name="description"
                className="form__content__input"
              />
              {errors.description && touched.description ? (
                <div className="form__content__error">{errors.description}</div>
              ) : null}
              <label htmlFor="category" className="form__content__label">
                *Category:
              </label>
              <Field
                required
                id="category"
                name="category"
                className="form__content__input"
              />
              {errors.category && touched.category ? (
                <div className="form__content__error">{errors.category}</div>
              ) : null}
              <label htmlFor="variants" className="form__content__label">
                Variants:
              </label>
              <FieldArray name="variants">
                {({ insert, remove, push }) => (
                  <div>
                    {values.variants.length > 0 &&
                      values.variants.map((variant, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            {/* <label htmlFor={`friends.${index}`}>Name</label> */}
                            <Field
                              name={`variants.${index}`}
                              placeholder="cotton"
                              type="text"
                            />
                          </div>
                          <div className="col">
                            <button type="button" onClick={() => remove(index)}>
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button type="button" onClick={() => push('')}>
                      Add variant
                    </button>
                  </div>
                )}
              </FieldArray>
              {errors.variants && touched.variants ? (
                <div className="form__content__error">{errors.variants}</div>
              ) : null}
              <label htmlFor="size" className="form__content__label">
                *Size:
              </label>
              <Field
                required
                id="size"
                name="size"
                className="form__content__input"
              />
              {errors.size && touched.size ? (
                <div className="form__content__error">{errors.size}</div>
              ) : null}
              <button
                type="submit"
                className="form__content__submit-btn"
                disabled={isSubmitting}
              >
                Update
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  )
}

export default UpdateProductForm
