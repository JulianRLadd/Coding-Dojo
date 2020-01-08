class Hero < ActiveRecord::Base
    has_many :sidekicksHer
    validates :name, :power, :numPeopleSaved, presence: true
    validates :name, :power, length: {minimum: 3}
    validates :numPeopleSaved, numericality: {only_integer: true, greater_than_or_equal_to: 0}
end

