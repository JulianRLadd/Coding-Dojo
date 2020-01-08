class SessionsController < ApplicationController
before_action :require_login, except: [:new,:create]
  def new
      render "new"
  end
  def create
      # Log User In
      @user = User.find_by_email(params[:email])
      if @user.try(:authenticate, params[:password])
          session[:user_id]=@user.id
          redirect_to user_path(@user.id)
      else
          flash[:notice] =['Invalid Combination']
          redirect_to '/sessions/new'
      end
  end
  def destroy
      # Log User out
      session[:user_id]= nil
      redirect_to '/sessions/new'
  end
end