class FatesController < ApplicationController
  def index
    render json: User.all
  end

  def new
    render "new"
  end

  def show
    render json: User.find(params[:id])
  end
  def total
    render json: User.all.length
  end
  def edit
    @user=User.find(params[:id])
    render "edit"
  end
  def create
    @user = User.create( name: params[:name], age: params[:age])
    redirect_to '/users'
  end
end
