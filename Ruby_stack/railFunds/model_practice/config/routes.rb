Rails.application.routes.draw do
  #root "heros#index"
  get "" => "heros#index"
  get "heroes" => "heros#show_all"
  post "heroes" => "heros#create"
end
