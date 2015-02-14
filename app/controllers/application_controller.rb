class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_locale

  def set_locale
    # update sessions if passed
    session[:locale] = params[:locale] if params[:locale]

    # set locale based on sessions or default
    I18n.locale = params[:locale] || extract_locale_from_accept_language_header
    #I18n.locale = extract_locale_from_accept_language_header
  end

  private

  def extract_locale_from_accept_language_header
    begin
      request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
    rescue
      'en'
    end
  end
end
