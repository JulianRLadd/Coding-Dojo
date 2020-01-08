class HerosController < ApplicationController
	def index
	end
	def show_all
		@heroes = Hero.all
	end
	def create
		puts params
		hero = Hero.create(hero_params)
		if hero.valid?
			redirect_to "/heroes",alert: hero.errors.full_messages
		else
			redirect_to "/heroes", alert: hero.errors.full_messages
		end
	end
	private
	def hero_params
		params.require(:hero).permit(:name, :superpower, :numPeopleSaved)
	end
end
