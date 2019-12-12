/*********************************** 
 *       GLOABL VARIABLES
 * *********************************/
let allProducts = [
  {
    id: 001,
    name: `French Vanilla`,
    category: `Cake`,
    price: 8,
    quantity: 5,
    description: `Classic creamy vanilla ice cream with french vanilla syrup and a cherry on top`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/../img/2.jpeg`,
    rate: 5
  },
  {
    id: 002,
    name: `Go Bananas!`,
    category: `Cake`,
    price: 16,
    quantity: 10,
    description: `Banana and vanilla ice cream flavored with salted caramel and toffee sauce, topped with dried banana chips.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/../img/4.jpeg`,
    rate: 3.5
  },

  {
    id: 003,
    name: `Harri the Cookie Monster`,
    category: `Candy`,
    price: 9,
    quantity: 10,
    description: `Harri the cookie monster just adores vanilla ice cream and Oreo cookies. And we adore Harri too.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/c1.jpeg`,
    rate: 4.5
  },

  {
    id: 004,
    name: `The Black Devil`,
    category: `Candy`,
    price: 11,
    quantity: 0,
    description: `Vanilla ice cream, with liquorice sauce, and topped with liquorice candies.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/c2.jpeg`,
    rate: 4
  },

  {
    id: 005,
    name: `Capabanna`,
    category: `Candy`,
    price: 30,
    quantity: 0,
    description: `Classic creamy vanilla ice cream with french vanilla syrup and a cherry on top`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/c3.jpeg`,
    rate: 5
  },
  {
    id: 006,
    name: `S’mores`,
    category: `Candy`,
    price: 10,
    quantity: 25,
    description: `The American classic campfire dessert S’mores has found itself blended in a milkshake. Chocolate and vanilla ice cream with graham style biscuit, marshmallow syrup and chocolate sauce. Cream and marshmallows on top.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/c4.jpg`,
    rate: 2
  },

  {
    id: 007,
    name: `Mudslide Brownie`,
    category: `Candy`,
    price: 15,
    quantity: 100,
    description: `Indulgent soft chocolate brownie mix smothered in chocolate sauce and chocolate ice cream, topped with a delicious brownie.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/c5.jpeg`,
    rate: 5
  },

  {
    id: 08,
    name: `Peanut Snickerdoodle`,
    category: `Cake`,
    price: 18,
    quantity: 100,
    description: `Chocolate ice cream flavored with creamy peanut butter, and toffee sauce. Topped with salted peanuts.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/cake.jpeg`,
    rate: 3.5
  },{
    id: 09,
    name: `French Vanilla`,
    category: `Cake`,
    price: 8,
    quantity: 100,
    description: `Classic creamy vanilla ice cream with french vanilla syrup and a cherry on top`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/cake2.jpeg`,
    rate: 5
  },
  {
    id: 010,
    name: `Go Bananas!`,
    category: `Cake`,
    price: 16,
    quantity: 10,
    description: `Banana and vanilla ice cream flavored with salted caramel and toffee sauce, topped with dried banana chips.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/cake3.jpeg`,
    rate: 3.5
  },

  {
    id: 011,
    name: `Harri the Cookie Monster`,
    category: `Cupcake`,
    price: 9,
    quantity: 10,
    description: `Harri the cookie monster just adores vanilla ice cream and Oreo cookies. And we adore Harri too.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/cp.jpeg`,
    rate: 4.5
  },

  {
    id: 012,
    name: `The Black Devil`,
    category: `Cupcake`,
    price: 11,
    quantity: 0,
    description: `Vanilla ice cream, with liquorice sauce, and topped with liquorice candies.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/cp1.jpg`,
    rate: 4
  },

  {
    id: 013,
    name: `Capabanna`,
    category: `Cupcake`,
    price: 30,
    quantity: 0,
    description: `Classic creamy vanilla ice cream with french vanilla syrup and a cherry on top`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/cp2.jpeg`,
    rate: 5
  },
  {
    id: 014,
    name: `S’mores`,
    category: `Cupcake`,
    price: 10,
    quantity: 25,
    description: `The American classic campfire dessert S’mores has found itself blended in a milkshake. Chocolate and vanilla ice cream with graham style biscuit, marshmallow syrup and chocolate sauce. Cream and marshmallows on top.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/cp3.jpeg`,
    rate: 2
  },
  {
    id: 015,
    name: `Mudslide Brownie`,
    category: `Gift`,
    price: 15,
    quantity: 100,
    description: `Indulgent soft chocolate brownie mix smothered in chocolate sauce and chocolate ice cream, topped with a delicious brownie.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/g1.jpeg`,
    rate: 5
  },

  {
    id: 016,
    name: `Peanut Snickerdoodle`,
    category: `Gift`,
    price: 18,
    quantity: 100,
    description: `Chocolate ice cream flavored with creamy peanut butter, and toffee sauce. Topped with salted peanuts.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/g2.jpeg`,
    rate: 3.5
  },

  {
    id: 017,
    name: `Chocolate Snickerdoodle`,
    category: `Gift`,
    price: 18,
    quantity: 100,
    description: `Chocolate ice cream flavored with creamy peanut butter, and toffee sauce. Topped with salted peanuts.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `/img/g3.jpeg`,
    rate: 3.5
  },
  {
    id: 18,
    name: `Lavender Chcoco Mix`,
    category: `Gift`,
    price: 18,
    quantity: 100,
    description: `Chocolate ice cream flavored with creamy peanut butter, and toffee sauce. Topped with salted peanuts.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `../img/g4.jpeg`,
    rate: 3.5
  },
  {
    id: 19,
    name: `Lavender Chcoco Mix`,
    category: `Ice Cream`,
    price: 18,
    quantity: 100,
    description: `Chocolate ice cream flavored with creamy peanut butter, and toffee sauce. Topped with salted peanuts.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `../img/i1.jpeg`,
    rate: 3.5
  },
  ,
  {
    id: 020,
    name: `Lavender Chcoco Mix`,
    category: `Ice Cream`,
    price: 18,
    quantity: 100,
    description: `Chocolate ice cream flavored with creamy peanut butter, and toffee sauce. Topped with salted peanuts.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `../img/i2.jpeg`,
    rate: 3.5
  },
  ,
  {
    id: 021,
    name: `Lavender Chcoco Mix`,
    category: `Ice Cream`,
    price: 18,
    quantity: 100,
    description: `Chocolate ice cream flavored with creamy peanut butter, and toffee sauce. Topped with salted peanuts.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `../img/i2.jpeg`,
    rate: 4.5
  },
  ,
  {
    id: 022,
    name: `Lavender Chcoco Mix`,
    category: `Ice Cream`,
    price: 18,
    quantity: 100,
    description: `Chocolate ice cream flavored with creamy peanut butter, and toffee sauce. Topped with salted peanuts.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `../img/i3.jpeg`,
    rate: 5
  },
  ,
  {
    id: 023,
    name: `Lavender Chcoco Mix`,
    category: `Ice Cream`,
    price: 18,
    quantity: 100,
    description: `Chocolate ice cream flavored with creamy peanut butter, and toffee sauce. Topped with salted peanuts.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `../img/i4.jpeg`,
    rate: 2.5
  },
  ,
  {
    id: 025,
    name: `Lavender Chcoco Mix`,
    category: `Ice Cream`,
    price: 18,
    quantity: 100,
    description: `Chocolate ice cream flavored with creamy peanut butter, and toffee sauce. Topped with salted peanuts.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `../img/i5.jpeg`,
    rate: 4.5
  },
  {
    id: 026,
    name: `Lavender Chcoco Mix`,
    category: `Milkshake`,
    price: 18,
    quantity: 100,
    description: `Chocolate ice cream flavored with creamy peanut butter, and toffee sauce. Topped with salted peanuts.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `../img/ms2.jpeg`,
    rate: 2.5
  },
  ,
  {
    id: 027,
    name: `Lavender Chcoco Mix`,
    category: `Milkshake`,
    price: 18,
    quantity: 100,
    description: `Chocolate ice cream flavored with creamy peanut butter, and toffee sauce. Topped with salted peanuts.`,
    size: [`Small`, `Medium`, `Large`],
    option: [`Gluten Free`, `Lactose Free`, `Low in Lactose`, `Vegan`],
    image: `../img/ms1.jpeg`,
    rate: 4.5
  },


]

/*********************************** 
 *            FUNCTIONS
 * *********************************/

  //SORTING PRODUCTS BY REVIEW, NAME, PRICE

  const productsBySort = (arrayToSort, criteria) => {

    const sortedProducts = arrayToSort.slice(); // clone the array

    if (criteria == 'priceAsc') {
      // SORT BY LOWEST PRICE TO HIGHEST
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (criteria == 'priceDesc') {
      // SORT BY PRICE HIGHEST TO LOWEST
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (criteria == 'nameAsc') {
      // SORT BY NAME A-Z
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria == 'nameDesc') {
      // SORT BY NAME Z-A
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (criteria == `ratings`) {
      //SORT BY HIGHEST RATED TO LOWEST
      sortedProducts.sort((a, b) => b.rate - a.rate);
    }

    return sortedProducts; // RETURN NEW ARRAY
  }

  // FILTER
  const runTheFilter = theForm => {

    const nameToSearch = theForm.elements.productName.value;
    const categoryToSearch = theForm.elements.category.value;

    // MULTIPLE FILTERS OF PRODUCTS
    const filteredProducts = allProducts
      //FILTER BY NAME
      .filter(p => p.name.toLowerCase().includes(nameToSearch.trim().toLowerCase()))
      //FILTER BY CATEGORY
      .filter(p => `${p.category}` == categoryToSearch || categoryToSearch == "all")

    renderProductsInArray(filteredProducts);
  }

  /*********************************** 
  *      EVENT HANDLER FUNCTIONS
  * *********************************/

  const toggleLayoutView = event => {
    document.getElementById('results').classList.toggle('grid-view');
    document.getElementById('product-container').classList.toggle('width-change');
  }

  // When the filter form itself is submit...
  const filterTheProducts = event => {
    event.preventDefault(); // Prevent the submit form refreshing
    runTheFilter(event.target);
  }


  // When a filter form component is submit...
  const submitTheFilterForm = event => {
    runTheFilter(event.target.form);
  }

  // When sorting, ensure the filters run first (which leads to a render)
  const sortTheProducts = event => {
    runTheFilter(document.getElementById('filtersForm'));
  }

  // FUNCTIONS THAT BUILD OUR VIEW **************
  const displayProductsAsHtml = (product) => {
    let addToCart = ``;
    let reviewStars= ``;
    if (product.quantity <= 0) {
      addToCart = `<button type="button" class="soldout">Sold Out <i class="fas fa-shopping-cart"></i></button>`;
    } else{
      addToCart = `<button type="button" class="cart"">Add  to Cart <i class="fas fa-shopping-cart"></i></button>`;

    }

    if(product.rate == 5) {
      reviewStars = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`;
    } else if(product.rate == 4.5) {
      reviewStars = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>`;
    } else if(product.rate == 4) {
      reviewStars =`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>`;
    } else if(product.rate == 3.5) {
      reviewStars =`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i>`;
    } else if(product.rate == 3) {
      reviewStars =`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
    } else if(product.rate == 2.5) {
      reviewStars =`<i class="fas fa-star"></i><i class="fas fa-star"></i></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
    } else if(product.rate == 2) {
      reviewStars =`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
    } else if(product.rate == 1.5) {
      reviewStars =`<i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
    } else if(product.rate == 1) {
      reviewStars =`<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
    } else if(product.rate == 0.5) {
      reviewStars =`<i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
    } else if(product.rate == 0) {
      reviewStars =`<i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`;
    }

    // let options;
    // for(var i=0; i<product.option.length; i++) {
    //   options= `${product.option[i]}`
    //   console.log(`${options}`);
    // }

    return `
    
    <div class="product-container">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-content">
        <p class="name">${product.name}</p>
        <p class="price">CA$${product.price}</p>
        ${reviewStars}
        ${addToCart}
        </div>
    </div>
    `;
  }


  const renderProductsInArray = arr => {
    
    const sortBy = document.getElementById('sortOrder').value;    // dropdown value
    arr = productsBySort(arr, sortBy);  // sort the courses, reassign the new Array

    // const resultsPerPage = 8;
    // const strt = 0;
    // const numberOfPages = allProducts.length/ resultsPerPage;


    // document.getElementById(`pagination`).innerHTML = "";
    // const pagination = (len, amt) => {
    //   for (let i = 0; i < len / amt; i++)
    //     document.getElementById(`pagination`).innerHTML += `<a href="#" data-page=${i + 1}>${i + 1}</a> `
    // }

    // const render = (p, a) => {
    //   const st = (p - 1) * a;
    //   const results = allProducts.slice(st, st + a).map(displayProductsAsHtml).join('')
    //   document.getElementById(`results`).innerHTML = results;
    // }

    // document.getElementById('pagination').addEventListener('click', function ({ target }) {
    //   if (!target.matches(`a`)) return;
    //   render(parseInt(target.dataset.page), amt)
    // })

    // pagination(allProducts.length, amt)
    // render(page, amt);

    if (arr.length > 0) {
      document.getElementById('results').innerHTML = arr.map(displayProductsAsHtml).join('\n'); // Print courses  
    } else {
      document.getElementById('results').innerHTML = 'Sorry, no matching results.' // Woops!
    }

    document.getElementById('resultsnum').innerHTML = `(${arr.length} ${(arr.length == 1) ? 'result' : 'results'})`; // Display number of total results

  }

  /*********************************** 
 *            EXECUTION
 * *********************************/

  window.addEventListener('load', () => {


    // The course elements
    renderProductsInArray(allProducts);

    // UI elements
    document.getElementById('layoutView').addEventListener('click', toggleLayoutView);
    document.getElementById('results').addEventListener('click', handleClickOfProducts);
    document.getElementById('sortOrder').addEventListener('change', sortTheProducts);

    // The filter form
    document.getElementById('filtersForm').addEventListener('submit', filterTheProducts);

    // The filter form components
    document.getElementById('productName').addEventListener('input', submitTheFilterForm);
    document.querySelectorAll('[name="category"]').forEach(radbtn => radbtn.addEventListener('change', submitTheFilterForm));

  });
