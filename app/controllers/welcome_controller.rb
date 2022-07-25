class WelcomeController < ApplicationController
    skip_before_action :authenticate_user
    def index
        render file: Rails.root.join('/Users/salvatore/Desktop/Last Time/Final-Project/client/public/','index.html')
    end
end
