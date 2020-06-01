import React from "react";
import "./productCategory.css"

//Administratörer ska kunna redigera vilka kategorier en produkt tillhör (VG)

class ProductCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://localhost:5000/product"
      );
      const data = await response.json();
      this.setState(() => ({
        product: data[0]
      }));
    } catch (error) {
      console.log("Error in fetching data");
    }
  }

  render() {
    return (
      <div id="content-container">
        <h3>Här ska man kunna redigera vilka kategorier en produkt tillhör</h3>
      </div>
    );
  }
}

export default ProductCategory;