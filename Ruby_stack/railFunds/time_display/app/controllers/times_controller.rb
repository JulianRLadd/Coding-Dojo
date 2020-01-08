class TimesController < ApplicationController
  def main
    time = Time.now
    @date = time.strftime("%B %d, %Y")    # "21 of December, 2015"
    @time = time.strftime("%I:%M %p")        # "11:04 PM"
  end
end
