class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :set_locale

  def set_locale
    # update sessions if passed
    session[:locale] = params[:locale] if params[:locale]

    # set locale based on sessions or default
    I18n.locale = session[:locale] || I18n.default_locale
  end
end
