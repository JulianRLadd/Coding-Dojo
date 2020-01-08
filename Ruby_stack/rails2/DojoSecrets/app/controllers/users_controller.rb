class UsersController < ApplicationController
  before_action :require_login, except: [:new, :create]
  #Users
  def create
    @user = User.create(user_params)
    if @user.valid?
        flash[:notice] = ["You did it! The form was submitted!"]
        redirect_to new_session_path
    else
        redirect_to new_user_path, notice: @user.errors.full_messages
    end
  end
  def new
    render "new"
  end
  def update
    @user = User.find(session[:user_id])
    @user.update(user_params)
    unless @user.errors.full_messages
      flash[:notice] = ["You did it! The form was submitted!"]
      redirect_to user_path
    else
      redirect_to edit_user_path(session[:user_id]), notice: @user.errors.full_messages
    end
  end
  def show
    @user = User.find(session[:user_id])
    render "show"
  end
  def edit
    @user = User.find(session[:user_id])
    render "edit"
  end
  def destroy
    @user = User.find(session[:user_id])
    @user.destroy
    session[:user_id]= nil
    redirect_to '/users/new'
end



#Secrets
def secret
  @secret = Secret.create(secret_params)
  redirect_to user_path(session[:user_id])
end
def destroy_secret
  @secret = Secret.find(params[:id])
  @secret.destroy
  redirect_to user_path(session[:user_id])
end
def index
  @secrets = Secret.all
  render "index"
end


#Likes
def like
    @like = Like.create(like_params)
  redirect_to '/secrets'
end
def unlike
    @like = Like.find(params[:id])
    @like.destroy
  redirect_to '/secrets'
end
  private 
    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)#.merge(user: User.find(session[:user_id]))
    end
  private 
    def secret_params
        params.require(:secret).permit(:content).merge(user: User.find(session[:user_id]))
    end
  private 
    def like_params
        params.permit(:user_id, :secret_id).merge(user: User.find(session[:user_id]),secret: Secret.find(params[:secret_id]))
    end
end