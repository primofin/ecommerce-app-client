import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers, FieldArray } from 'formik'

import { AppState } from '../../types'
import { adminCreateProduct } from '../../redux/actions/product'
import AddProductSchema from './validate'
import './addProductForm.scss'

type Values = {
  productName: string
  price: number
  images: string[]
  description: string
  category: string
  variants: string[]
  size: string | number
}

const AddProductForm = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)

  return (
    <div className="">
      <div className="form__title add-product__form__title">
        add new product
      </div>
      {isLoggedIn && (
        <Formik
          initialValues={{
            productName: '',
            price: 10,
            images: [''],
            description: '',
            category: '',
            variants: [''],
            size: '',
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
              adminCreateProduct(
                productName,
                price,
                images,
                description,
                category,
                variants,
                size
              )
            )
            alert('New product is added')
            setSubmitting(false)
            resetForm()
          }}
        >
          {({ isSubmitting, values, errors, touched }) => (
            <Form className="form__content add-product__form__content">
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
                              className="add-product__form__imgUrl"
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
                Add
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  )
}

export default AddProductForm
