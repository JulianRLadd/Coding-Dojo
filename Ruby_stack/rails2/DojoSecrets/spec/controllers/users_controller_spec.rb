require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    def new
        @user = User.create
    end
end
