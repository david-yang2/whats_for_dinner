@dishes.each do |dish|
  json.set! dish.id do
    json.partial! 'dish', dish: dish
  end
end
