Rails.application.routes.draw do

  root 'pages#home'
  get 'company'   => 'pages#company'
  get 'services'  => 'pages#services'
  get 'contact'   => 'pages#contact'
end
