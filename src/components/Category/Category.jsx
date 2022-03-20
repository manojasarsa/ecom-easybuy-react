import "./category.css"

const Category = () => {
    return (
        <nav className="main_nav flex flex_align_center">
            <a href="/product-list/product-list.html" className="nav_item flex flex_col flex_align_center">Men
                <img src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/male.jpg" alt="Men" className="img_responsive adjust_img" />
            </a>

            <a href="/product-list/product-list.html" className="nav_item flex flex_col flex_align_center">Women
                <img src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/male.jpg" alt="Women" className="img_responsive adjust_img" />
            </a>

            <a href="/product-list/product-list.html" className="nav_item flex flex_col flex_align_center">Kids
                <img src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/male.jpg" alt="Kids" className="img_responsive adjust_img" />
            </a>

            <a href="/product-list/product-list.html" className="nav_item flex flex_col flex_align_center">Best Sellers
                <img src="https://raw.githubusercontent.com/manojasarsa/easybuy-ecom/dev/images/male.jpg" alt="Best Sellers" className="img_responsive adjust_img" />
            </a>
        </nav>
    );
}

export {Category};