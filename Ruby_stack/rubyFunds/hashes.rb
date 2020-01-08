hash = {first_name: "Julian",last_name:"Ladd"}
puts hash
puts hash.delete(:last_name) 
puts hash.empty? 
puts hash.has_key?(:first_name)
puts hash.has_value?("Ladd")
puts hash[:first_name]

