@chefs.each do |chef|
  json.set! chef.id do
    json.partial! 'chef', chef: chef
  end
end
