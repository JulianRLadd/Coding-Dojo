class DojosControllerController < ApplicationController
  def index
    @dojos = Dojo.all
    render "index"
  end
  def new
    render "new"
  end
  def newDojo
      dojo = Dojo.create(dojo_params)
      if dojo.valid?
        flash[:success] = "You did it! The form was submitted!"
        redirect_to "/dojos"
      else
        redirect_to "/dojos/new", alert: dojo.errors.full_messages
      end
    end
  def editDojo
      @dojo = Dojo.find(params[:id_num]).update(dojo_params)
      p @dojo.class
      if true&@dojo
        flash[:success] = "You did it! The form was submitted!"
        redirect_to "/dojos"
      else
        redirect_to "/dojos/new", alert: dojo.errors.full_messages
      end
    end
  def details
    @dojo = Dojo.find(params[:id])
    render "details"
  end
  def edit
    @dojo = Dojo.find(params[:id])
    render "edit"
  end
  def destroy
    @dojo = Dojo.find(params[:id]).destroy
    redirect_to "/dojos"
  end
  private 
    def dojo_params
      params.require(:dojo).permit(:branch, :street, :city, :state)
    end
end
