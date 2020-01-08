class GreetingsController < ApplicationController
  def index
  end
  def hello
    render text: 'Hello Coding Dojo!'
  end
  def sayhello
    render text: 'Saying Hello!'
  end
  def sayhellojoe
    render text: 'Saying Hello Joe!'
  end
  def sayhellomichael
    redirect_to "/say/hello/joe"
  end

  def times
    if session[:times]
      session[:times] += 1
    else
      session[:times] = 1
    end
    render text: "You visited this url #{session[:times]} time"
  end
  def timesrestart
      session[:times] = 0
    render text: "Destroyed the session!"
  end
  def say
    render text: "What do you want me to say???"
  end
  def new
  end
end
