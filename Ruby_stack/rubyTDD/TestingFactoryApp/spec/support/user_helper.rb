require "rails_helper"
module CapybaraHelpers
  def register_user(first_name: 'shane', last_name: "chang", email: "schang@codingdojo.com")
    visit new_user_path unless current_path == new_user_path
    fill_in "user[first_name]", with: first_name
    fill_in "user[last_name]", with: last_name
    fill_in "user[email]", with: email
    click_button "Create User"
  end
end