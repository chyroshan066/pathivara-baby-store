import { memo } from "react";
import { RowContainer } from "./utility/RowContainer";
import { SectionHeader } from "./utility/SectionHeader";

export const BestSelling = memo(() => (
    <section className="section-padding pt-0">
        <div className="container-lg">

            <SectionHeader
                title="Best selling products"
                btnText="View All"
            />

            <RowContainer>

                <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">

                    <div className="col">
                        <div className="product-item mb-4">
                            <figure>
                                <a href="single-product.html" title="Product Title">
                                    <img src="images/product-thumb-1.jpg" alt="Product Thumbnail" className="img-fluid" />
                                </a>
                            </figure>
                            <div className="d-flex flex-column text-center">
                                <h3 className="fs-6 fw-normal">Product Item Name</h3>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <del>$24.00</del>
                                    <span className="text-dark fw-semibold">$18.00</span>
                                    <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                                </div>
                                <div className="button-area p-3 pt-0">
                                    <div className="row g-1 mt-2">
                                        <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                                        <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</a></div>
                                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-item mb-4">
                            <figure>
                                <a href="single-product.html" title="Product Title">
                                    <img src="images/product-thumb-2.jpg" alt="Product Thumbnail" className="img-fluid" />
                                </a>
                            </figure>
                            <div className="d-flex flex-column text-center">
                                <h3 className="fs-6 fw-normal">Product Item Name</h3>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <del>$24.00</del>
                                    <span className="text-dark fw-semibold">$18.00</span>
                                    <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                                </div>
                                <div className="button-area p-3 pt-0">
                                    <div className="row g-1 mt-2">
                                        <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                                        <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</a></div>
                                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-item mb-4">
                            <figure>
                                <a href="single-product.html" title="Product Title">
                                    <img src="images/product-thumb-3.jpg" alt="Product Thumbnail" className="img-fluid" />
                                </a>
                            </figure>
                            <div className="d-flex flex-column text-center">
                                <h3 className="fs-6 fw-normal">Product Item Name</h3>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <del>$24.00</del>
                                    <span className="text-dark fw-semibold">$18.00</span>
                                    <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                                </div>
                                <div className="button-area p-3 pt-0">
                                    <div className="row g-1 mt-2">
                                        <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                                        <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</a></div>
                                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-item mb-4">
                            <figure>
                                <a href="single-product.html" title="Product Title">
                                    <img src="images/product-thumb-4.jpg" alt="Product Thumbnail" className="img-fluid" />
                                </a>
                            </figure>
                            <div className="d-flex flex-column text-center">
                                <h3 className="fs-6 fw-normal">Product Item Name</h3>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <del>$24.00</del>
                                    <span className="text-dark fw-semibold">$18.00</span>
                                    <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                                </div>
                                <div className="button-area p-3 pt-0">
                                    <div className="row g-1 mt-2">
                                        <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                                        <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</a></div>
                                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-item mb-4">
                            <figure>
                                <a href="single-product.html" title="Product Title">
                                    <img src="images/product-thumb-5.jpg" alt="Product Thumbnail" className="img-fluid" />
                                </a>
                            </figure>
                            <div className="d-flex flex-column text-center">
                                <h3 className="fs-6 fw-normal">Product Item Name</h3>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <del>$24.00</del>
                                    <span className="text-dark fw-semibold">$18.00</span>
                                    <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                                </div>
                                <div className="button-area p-3 pt-0">
                                    <div className="row g-1 mt-2">
                                        <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                                        <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</a></div>
                                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-item mb-4">
                            <figure>
                                <a href="single-product.html" title="Product Title">
                                    <img src="images/product-thumb-6.jpg" alt="Product Thumbnail" className="img-fluid" />
                                </a>
                            </figure>
                            <div className="d-flex flex-column text-center">
                                <h3 className="fs-6 fw-normal">Product Item Name</h3>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <del>$24.00</del>
                                    <span className="text-dark fw-semibold">$18.00</span>
                                    <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                                </div>
                                <div className="button-area p-3 pt-0">
                                    <div className="row g-1 mt-2">
                                        <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                                        <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</a></div>
                                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-item mb-4">
                            <figure>
                                <a href="single-product.html" title="Product Title">
                                    <img src="images/product-thumb-7.jpg" alt="Product Thumbnail" className="img-fluid" />
                                </a>
                            </figure>
                            <div className="d-flex flex-column text-center">
                                <h3 className="fs-6 fw-normal">Product Item Name</h3>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <del>$24.00</del>
                                    <span className="text-dark fw-semibold">$18.00</span>
                                    <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                                </div>
                                <div className="button-area p-3 pt-0">
                                    <div className="row g-1 mt-2">
                                        <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                                        <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</a></div>
                                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="product-item mb-4">
                            <figure>
                                <a href="single-product.html" title="Product Title">
                                    <img src="images/product-thumb-8.jpg" alt="Product Thumbnail" className="img-fluid" />
                                </a>
                            </figure>
                            <div className="d-flex flex-column text-center">
                                <h3 className="fs-6 fw-normal">Product Item Name</h3>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <del>$24.00</del>
                                    <span className="text-dark fw-semibold">$18.00</span>
                                    <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                                </div>
                                <div className="button-area p-3 pt-0">
                                    <div className="row g-1 mt-2">
                                        <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                                        <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</a></div>
                                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </RowContainer>
        </div >
    </section >
));

BestSelling.displayName = "BestSelling";