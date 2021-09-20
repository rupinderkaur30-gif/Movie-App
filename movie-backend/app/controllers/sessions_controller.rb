class SessionsController < ApplicationController

    def create
        user = User.find_or_create_by(username: params[:username])
    end
end
