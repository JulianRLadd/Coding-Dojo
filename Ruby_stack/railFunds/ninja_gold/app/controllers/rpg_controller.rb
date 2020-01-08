class RpgController < ApplicationController
  def main
    unless session[:gold]
      session[:gold] = 0
      session[:activity] = []
      @activity = session[:activity]
    end
    @time_log=Time.now
  end
  def house
    @amount = rand(4)+2
    session[:activity]<< @amount
    session[:gold]+=@amount
    @time_log=Time.now
    redirect_to "/"
  end
  def casino
    @amount = rand(100)-50
    session[:activity]<< @amount
    session[:gold]+=@amount
    @time_log=Time.now
    redirect_to "/"
  end
  def cave
    @amount = rand(6)+5
    session[:activity]<< @amount
    session[:gold]+=@amount
    @time_log=Time.now
    redirect_to "/"
  end
  def farm
    @amount = rand(11)+10
    session[:activity]<< @amount
    session[:gold]+=@amount
    @time_log=Time.now
    redirect_to "/"
  end
end
