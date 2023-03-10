class RootController < ApplicationController
  def index
    @greeting = Message.order('RANDOM()').limit(1).first.text
    render 'index'
  end
end
