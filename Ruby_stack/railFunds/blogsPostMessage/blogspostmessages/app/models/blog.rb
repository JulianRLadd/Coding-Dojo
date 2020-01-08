class Blog < ActiveRecord::Base
    has_many :post
    validates :name, :description, presence:true
end
