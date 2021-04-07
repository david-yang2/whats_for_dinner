# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Chefs
Chef.destroy_all

chef1 = Chef.create(location: "North Beach", bio: "I have been cooking for 10 years", name:"Jimmy")
chef2 = Chef.create(location: "Chinatown", bio: "I enjoy cooking with my family.", name:"Tommy")
chef3 = Chef.create(location: "Richmond", bio: "Just started cooking and loving it so far!", name:"Kate")
chef4 = Chef.create(location: "Oakland", bio: "Cooking is an art!", name:"Emma")
chef5 = Chef.create(location: "Sunset", bio: "You don't need a silver fork to eat good food.", name:"Luffy")
chef6 = Chef.create(location: "Sunset", bio: "We help make everyday delicious", name:"Marion")
#Items
# t.integer "chef_id", null: false
# t.string "name", null: false
# t.text "description", null: false
# t.string "spiciness", null: false
# "Non-Spicy",
# "Mild",
# "Medium",
# "Spicy"


# item1 = Item.create(
#     chef_id: , 
#     name:"", 
#     description:"", 
#     spiciness: "",
#     price: 
# )
Item.destroy_all

item1 = Item.create(
    chef_id: chef1.id, 
    name:"Pho", 
    description:"Vietnamese soup consisting of broth, rice noodles, herbs, and meat, sometimes chicken", 
    spiciness: "Medium",
    price: 9.99
    )

item2 = Item.create(
    chef_id: chef3.id, 
    name:"Hamburger", 
    description:"Sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.", 
    spiciness: "Non-Spicy",
    price: 12.99
    )
    
item3 = Item.create(
    chef_id: chef1.id, 
    name:"Pineapple Fried Rice", 
    description:"Thai-style sweet and spicy pineapple fried rice with red bell pepper, cashews and cilantro.", 
    spiciness: "Mild",
    price: 13.99
)

item4 = Item.create(
    chef_id: chef5.id, 
    name:"Crazy Roll", 
    description:"deep-fried California Roll served with eel sauce", 
    spiciness: "Medium",
    price: 15.99
)

item5 = Item.create(
    chef_id: chef3.id, 
    name:"Alaskan Roll", 
    description:"smoked salmon, asparagus and avocado", 
    spiciness: "Non-Spicy",
    price: 9.99
)

item6 = Item.create(
    chef_id: chef2.id, 
    name:"Unagi Roll", 
    description:"freshwater eel and avocado on California Roll topped with sweet sauce", 
    spiciness: "Non-Spicy",
    price: 6.99
)

item7 = Item.create(
    chef_id: chef6.id, 
    name:"MARION’S BEST BEEF STROGANOFF", 
    description:"Russian dish of sautéed pieces of beef served in a sauce with smetana.", 
    spiciness: "Spicy",
    price: 16.99
)