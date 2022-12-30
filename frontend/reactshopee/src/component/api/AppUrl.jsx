class AppUrl{
    static BaseURL = "http://localhost:8080/api/v1/";
    static BaseURL2 = "http://localhost:8080/api/v2/";
    static BaseURL3 = "http://localhost:8080/api/v3/"
    static BaseURL4 = "http://localhost:8080/api/v4/"
    static AllProduct = this.BaseURL + "product";
    static ProductByCategory = this.BaseURL + "productbycategory/"
    static ProductByBrand = this.BaseURL + "productbybrand/";
    static AllBrand = this.BaseURL2 + "brandbanner";
    static ProductById = this.BaseURL + "product/";
    static ProductAttribute = this.BaseURL + "productattribute/";
    static ProductHome = this.BaseURL + "producthome";
    static Category = this.BaseURL3 + "category";
    static CategoryHeader = this.BaseURL3 + "categoryheader";
    static Register = this.BaseURL4 + "register";
}
 
export default AppUrl
