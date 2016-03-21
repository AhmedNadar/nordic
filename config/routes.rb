Rails.application.routes.draw do
  root 'pages#home'

  get 'company', to: 'pages#company', as: 'company'

  get 'pages/contact', as: 'contact'
end
