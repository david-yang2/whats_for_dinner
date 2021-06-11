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
chef2 = Chef.create(location: "Oakland", bio: '"Cooking is like love. It should be entered into with abandon or not at all."', name:"Marshawn",imagepath:"/images/chefs/marshawn.jpeg")
chef3 = Chef.create(location: "Richmond", bio: '"The secret of success in life is to eat what you like and let the food fight it out inside”', name:"Mark",imagepath:"/images/chefs/mark.jpeg")
chef4 = Chef.create(location: "Chinatown", bio: '“A recipe has no soul, You as the cook must bring soul to the recipe”', name:"Alvin",imagepath:"/images/chefs/alvin.jpeg")
chef5 = Chef.create(location: "Sunset", bio: '"The only thing I like better than talking about food is eating”', name:"Mike",imagepath:"/images/chefs/mike.jpeg")
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
    chef_id: chef6.id, 
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
    chef_id: chef5.id, 
    name:"Philadelphia Roll", 
    description:"deep-fried California Roll served with eel sauce", 
    spiciness: "Medium",
    price: 15.99,
    imagepath: "./images/items/philadelphia_roll.jpeg"
)

item5 = Item.create(
    chef_id: chef5.id, 
    name:"Alaskan Roll", 
    description:"smoked salmon, asparagus and avocado", 
    spiciness: "Non-Spicy",
    price: 9.99,
    imagepath: "./images/items/salmon_roll.jpeg"
)

item6 = Item.create(
    chef_id: chef5.id, 
    name:"Chirashi Bowl", 
    description:"Salmon, Akami, hamachi, butter fish, Steamed shrimp, tobiko, tamago, & avocado over sushi rice", 
    spiciness: "Non-Spicy",
    price: 6.99,
    imagepath: "./images/items/chirashi_bowl.jpeg"
)

item7 = Item.create(
    chef_id: chef5.id, 
    name:"Bincho Maguro", 
    description:"Seared Albacore Tuna", 
    spiciness: "Non-Spicy",
    price: 6.99,
    imagepath: "./images/items/albacore_tuna.jpeg"
)

item8 = Item.create(
    chef_id: chef5.id, 
    name:"Combination Sushi", 
    description:"3 pieces of each fish: otoro, hon maguro, and hamachi", 
    spiciness: "Non-Spicy",
    price: 16.99,
    imagepath: "./images/items/combination_sushi.jpeg"

)

item9 = Item.create(
    chef_id: chef4.id, 
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

item12 = Item.create(
    chef_id: chef6.id, 
    name:"Thai Curry Fried Rice", 
    description:"Thai red curry mixed with stir-fried mixed and egg on the side", 
    spiciness: "Spicy",
    price: 12.99,
    imagepath: "./images/items/thai_curry_fried_rice.jpeg"
)

item13 = Item.create(
    chef_id: chef4.id, 
    name:"Combo Pizza", 
    description:"Tomato sauce, sausage, garlic, caramelized onions, mozzarella over nice soft crust", 
    spiciness: "Spicy",
    price: 12.99,
    imagepath: "./images/items/combo_pizza.jpeg"
)

item14 = Item.create(
    chef_id: chef4.id, 
    name:"Lasagna Pizza", 
    description:"Tomato sauce, meatballs, ricotta, garlic, scamorza over soft crust", 
    spiciness: "Spicy",
    price: 12.99,
    imagepath: "./images/items/lasagna_pizza.jpeg"
)

item15 = Item.create(
    chef_id: chef6.id, 
    name:"Grilled Pork Vermicelli", 
    description:"Grilled pork, lettuce, mint, carrot pickle, green onions, fried onions over rice noodles", 
    spiciness: "Spicy",
    price: 12.99,
    imagepath: "./images/items/grilled_pork_vermicelli.jpeg"
)

item16 = Item.create(
    chef_id: chef2.id, 
    name:"Beast Mode Platter", 
    description:"10 Wings, 6 Fish, 6 Oysters, 6 Prawns, 4 Pork Chops, w/Choice of 5 XL - sides and 5 corn muffins", 
    spiciness: "Spicy",
    price: 87.99,
    imagepath: "./images/items/beast_mode_platter.jpeg"
)

item17 = Item.create(
    chef_id: chef2.id, 
    name:"Antee Rose", 
    description:"5 Pieces of Fish and 5 Prawns", 
    spiciness: "Spicy",
    price: 27.99,
    imagepath: "./images/items/antee_rose.jpeg"
)

item18 = Item.create(
    chef_id: chef2.id, 
    name:"Savory Shrimp & Grits", 
    description:"Stir fried small rice noodle, shrimp,dried shrimp, egg, ground peanut, tofu and bean sprout with red paprika powder and lime juice", 
    spiciness: "Spicy",
    price: 15.00,
    imagepath: "./images/items/famous_grits_and_oats.jpeg"
)

item19 = Item.create(
    chef_id: chef1.id, 
    name:"Savory Shrimp & Grits", 
    description:"creamy grits, jumbo prawns, beef links, bell peppers, topped with our cajun seasoned gravy, cheddar cheese, green onions and bacon", 
    spiciness: "Spicy",
    price: 13.99,
    imagepath: "./images/items/pad_thai.jpeg"
)
item20 = Item.create(
    chef_id: chef1.id, 
    name:"Pad Kee Mao", 
    description:"Stir fried flat rice noodle and your choice of meat with bamboo shoot,green bean,bell pepper,Thai chili and basil", 
    spiciness: "Spicy",
    price: 13.99,
    imagepath: "./images/items/pad_kee_mao.jpeg"
)
item22 = Item.create(
    chef_id: chef1.id, 
    name:"Papaya Salad", 
    description:"Shredded green papaya with tomatoes, green bean, ground peanut, dried shrimp in spicy lime dressing served with sliced lettuce", 
    spiciness: "Spicy",
    price: 9.99,
    imagepath: "./images/items/papaya_salad.jpeg"
)

item23 = Item.create(
    chef_id: chef1.id, 
    name:"Chicken Biriyani", 
    description:"Braised boneless chicken in a curry sauce, basmati rice, cardamom, clove, cinnamon, cashews, bay leaves, golden raisins, fried onion",
    spiciness: "Spicy",
    price: 15.00,
    imagepath: "./images/items/chicken_biriyani.jpeg"
)

item24 = Item.create(
    chef_id: chef3.id, 
    name:"Chicken Shawarma", 
    description:"Chicken, steam rice, side of hummus, and yogurt sauce. Served with pita bread and hummus",
    spiciness: "Spicy",
    price: 12.99,
    imagepath: "./images/items/chicken_shawarma.jpeg"
)

item25 = Item.create(
    chef_id: chef3.id, 
    name:"Beef Gyro", 
    description:"beef, steam rice, side of hummus, and yogurt sauce. Served with pita bread and hummus",
    spiciness: "Spicy",
    price: 8.99,
    imagepath: "./images/items/beef_gyro.jpeg"
)

item26 = Item.create(
    chef_id: chef4.id, 
    name:"Spicy Thai Chicken", 
    description:"Fried Chicken topped with spicy thai sauce",
    spiciness: "Spicy",
    price: 13.95,
    imagepath: "./images/items/spicy_thai_chicken.jpeg"
)

item27 = Item.create(
    chef_id: chef4.id, 
    name:"Sizzling Beef", 
    description:"Stir fried sliced beef with green pepper, black pepper, onion & bean paste",
    spiciness: "Spicy",
    price: 12.95,
    imagepath: "./images/items/sizzling_beef.jpeg"
)



User.destroy_all
user1 = User.create(
    username: "Emma",
    email: "Emma@test.com",
    password: "Emma123"
)

demouser= User.create(
    username: "David",
    email: "Davd@demo.com",
    password: "DavidDemo"

)

# Cart.destroy_all

# cart1 = Cart.create(
#     user_id: user1.id
# )

Cartitem.destroy_all

cartitem1 = Cartitem.create(
    user_id: demouser.id,
    name:"Pho Dac Biet", 
    description:"Vietnamese soup consisting of broth, rice noodles, herbs, and meat, sometimes chicken", 
    price: 9.99, 
    imagepath: "./images/items/pho.jpeg",
    review: "Tastes amazing! Love the broth!"
)

cartitem2 = Cartitem.create(
    user_id: demouser.id,
    name:"Chicken Salad Sandwich", 
    description:"Lettuce, Tomatoes, Onion, Jalapeno Aioli, Served with Fries", 
    price: 16.99,
    imagepath: "./images/items/chicken_sandwich.jpeg",
    review: "The jalapeno aioli added a great kick to the sandwich!"
)
cartitem3 = Cartitem.create(
    user_id: demouser.id,
    name:"Beast Mode Platter",
    description:"10 Wings, 6 Fish, 6 Oysters, 6 Prawns, 4 Pork Chops, w/Choice of 5 XL - sides and 5 corn muffins", 
    price: 87.99,
    imagepath: "./images/items/beast_mode_platter.jpeg",
    review: "Great dish. Everyone was stuffed!"
)
