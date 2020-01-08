require 'rails_helper'
RSpec.describe User do
    it "should not save if first_name field is blank" do
      user = User.new(
            first_name: '', 
            last_name: 'chang', 
            email: 'schang@codingdojo.com'
        )
      expect(user).to be_invalid
    end
    
    it "should not save if last_name field is blank"
    
    it "should not save if email already exists"
    
    it "should not save if invalid email format"
end