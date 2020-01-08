class SurveyControllerController < ApplicationController
  def index
    unless session[:times]
      session[:times]=0
    end
  end

  def display
      @survey = Survey.create(survey_params)
      session[:times]+=1
      puts session[:times]
      flash[:success] = "Thanks for submitting this form!You have submitted this form #{session[:times]} times now."
      redirect_to '/result'
  end

  def result
    @survey = Survey.last
  end

  private 
    def survey_params
      params.require(:survey).permit(:name, :location, :language, :comments)
    end
end
