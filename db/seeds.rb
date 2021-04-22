# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Chefs
Chef.destroy_all

chef1 = Chef.create(location: "North Beach", bio: '"We help make everyday delicious"', name:"Marion", imagepath:"/images/chefs/marion.jpeg")
chef2 = Chef.create(location: "Chinatown", bio: '"Cooking is like love. It should be entered into with abandon or not at all."', name:"Marshawn",imagepath:"/images/chefs/marshawn.jpeg")
chef3 = Chef.create(location: "Richmond", bio: '"The secret of success in life is to eat what you like and let the food fight it out inside”', name:"Mark",imagepath:"/images/chefs/mark.jpeg")
chef4 = Chef.create(location: "Oakland", bio: '“A recipe has no soul, You as the cook must bring soul to the recipe”', name:"Alvin",imagepath:"/images/chefs/alvin.jpeg")
chef5 = Chef.create(location: "Sunset", bio: 'The only thing I like better than talking about food is eating”', name:"Mike",imagepath:"/images/chefs/mike.jpeg")
chef6 = Chef.create(location: "Sunset", bio: '"You don\'t need a silver fork to eat good food."', name:"Dzung",imagepath:"/images/chefs/dzung.jpeg")
#Items
# t.integer "chef_id", null: false
# t.string "name", null: false
# t.text "description", null: false
# t.string "spiciness", null: false
# "Non-Spicy",
# "Mild",
# "Medium",
# "Spicy"




# sushi pictures from http://www.momoizakaya.com/

Item.destroy_all

item1 = Item.create(
    chef_id: chef1.id, 
    name:"Pho Dac Biet", 
    description:"Vietnamese soup consisting of broth, rice noodles, herbs, and meat, sometimes chicken", 
    spiciness: "Medium",
    price: 9.99, 
    imagepath: "./images/items/pho.jpeg"
    )

item2 = Item.create(
    chef_id: chef3.id, 
    name:"Everything Burger", 
    description:"Cheddar cheese, caramalized onions, jalapenos, BBQ sauce, Mayo, Lettuce, and Tomato", 
    spiciness: "Non-Spicy",
    price: 12.99,
    imagepath: "./images/items/everything_burger.jpeg"
    )
    
item3 = Item.create(
    chef_id: chef3.id, 
    name:"Truffle Fries", 
    description:"Truffle Oil, Parmesan, Chives, Truffle Aioli", 
    spiciness: "Mild",
    price: 8.99,
    imagepath: "./images/items/truffle_fries.jpeg"
)

item4 = Item.create(
    chef_id: chef2.id, 
    name:"Philadelphia Roll", 
    description:"deep-fried California Roll served with eel sauce", 
    spiciness: "Medium",
    price: 15.99,
    imagepath: "./images/items/philadelphia_roll.jpeg"
)

item5 = Item.create(
    chef_id: chef2.id, 
    name:"Alaskan Roll", 
    description:"smoked salmon, asparagus and avocado", 
    spiciness: "Non-Spicy",
    price: 9.99,
    imagepath: "./images/items/salmon_roll.jpeg"
)

item6 = Item.create(
    chef_id: chef2.id, 
    name:"Chirashi Bowl", 
    description:"Salmon, Akami, hamachi, butter fish, Steamed shrimp, tobiko, tamago, & avocado over sushi rice", 
    spiciness: "Non-Spicy",
    price: 6.99,
    imagepath: "./images/items/chirashi_bowl.jpeg"
)

item7 = Item.create(
    chef_id: chef2.id, 
    name:"Bincho Maguro", 
    description:"Seared Albacore Tuna", 
    spiciness: "Non-Spicy",
    price: 6.99,
    imagepath: "./images/items/albacore_tuna.jpeg"
)

item8 = Item.create(
    chef_id: chef2.id, 
    name:"Combination Sushi", 
    description:"3 pieces of each fish: otoro, hon maguro, and hamachi", 
    spiciness: "Non-Spicy",
    price: 16.99,
    imagepath: "./images/items/combination_sushi.jpeg"

)

item9 = Item.create(
    chef_id: chef5.id, 
    name:"Chicken Salad Sandwich", 
    description:"Lettuce, Tomatoes, Onion, Jalapeno Aioli, Served with Fries", 
    spiciness: "Spicy",
    price: 16.99,
    imagepath: "./images/items/chicken_sandwich.jpeg"
)

item10 = Item.create(
    chef_id: chef6.id, 
    name:"Wonton Soup", 
    description:"Ground prok, wonton wrappers, soy sauce, sesame oil, chicken broth", 
    spiciness: "Spicy",
    price: 12.99,
    imagepath: "./images/items/wonton_soup.jpeg"
)

item11 = Item.create(
    chef_id: chef6.id, 
    name:"Crispy Chicken over Rice", 
    description:"Slightly fried skin-on boneless chicken thighs over special fried rice", 
    spiciness: "Spicy",
    price: 12.99,
    imagepath: "./images/items/crispy_chicken_rice.jpeg"
)

item11 = Item.create(
    chef_id: chef6.id, 
    name:"Thai Curry Fried Rice", 
    description:"Thai red curry mixed with stir-fried mixed and egg on the side", 
    spiciness: "Spicy",
    price: 12.99,
    imagepath: "./images/items/thai_curry_fried_rice.jpeg"
)

item11 = Item.create(
    chef_id: chef4.id, 
    name:"Combo Pizza", 
    description:"Tomato sauce, sausage, garlic, caramelized onions, mozzarella over nice soft crust", 
    spiciness: "Spicy",
    price: 12.99,
    imagepath: "./images/items/combo_pizza.jpeg"
)

item11 = Item.create(
    chef_id: chef4.id, 
    name:"Lasagna Pizza", 
    description:"Tomato sauce, meatballs, ricotta, garlic, scamorza over soft crust", 
    spiciness: "Spicy",
    price: 12.99,
    imagepath: "./images/items/lasagna_pizza.jpeg"
)

item11 = Item.create(
    chef_id: chef1.id, 
    name:"Grilled Pork Vermicelli", 
    description:"Grilled pork, lettuce, mint, carrot pickle, green onions, fried onions over rice noodles", 
    spiciness: "Spicy",
    price: 12.99,
    imagepath: "./images/items/grilled_pork_vermicelli.jpeg"
)


User.destroy_all
user1 = User.create(
    username: "Emma",
    password: "Emma123"
)

# Cart.destroy_all

# cart1 = Cart.create(
#     user_id: user1.id
# )

Cartitem.destroy_all

cartitem1 = Cartitem.create(
    user_id: user1.id,
    name:"Pho Dac Biet", 
    description:"Vietnamese soup consisting of broth, rice noodles, herbs, and meat, sometimes chicken", 
    price: 9.99, 
    imagepath: "./images/items/pho.jpeg",
    review: "Tastes amazing! Love the broth!"
)

cartitem2 = Cartitem.create(
    user_id: user1.id,
    name:"Chicken Salad Sandwich", 
    description:"Lettuce, Tomatoes, Onion, Jalapeno Aioli, Served with Fries", 
    price: 16.99,
    imagepath: "./images/items/chicken_sandwich.jpeg",
    review: "The jalapeno aioli added a great kick to the sandwich!"
)