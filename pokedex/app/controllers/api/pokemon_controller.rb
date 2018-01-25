class Api::PokemonController < ApplicationController
  def create
  end

  def show
    @pokemon = Pokemon.find_by_id(params[:id])
    if @pokemon
      render :show
    end
  end

  def index
    @pokemon = Pokemon.all
    render :index
  end

  def update
  end

  def destroy
  end
end
