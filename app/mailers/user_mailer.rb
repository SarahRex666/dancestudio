class UserMailer < ApplicationMailer
    default from: 'sarah@sarahrex.info'
    # using SendGrid's Ruby Library
# https://github.com/sendgrid/sendgrid-ruby
require 'sendgrid-ruby'
include SendGrid

    def welcome_email (user)
        from = Email.new(email: 'sarah@sarahrex.info')
        to = Email.new(email: user.email)
        subject = 'Welcome to A Step Above!'
        content = Content.new(type: 'text/plain', value: 'Thank you for verifying your email address!')
        mail = Mail.new(from, subject, to, content)
        
        sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
        response = sg.client.mail._('send').post(request_body: mail.to_json)
        puts response.status_code
        puts response.body
        puts response.headers
      end

      def forgot_email (user)
        from = Email.new(email: 'sarah@sarahrex.info')
        to = Email.new(email: user.email)
        subject = 'A Step Above Password Recovery'
        content = Content.new(type: 'text/plain', value: 'Go to https://final-project-asapa.herokuapp.com/ResetPassword')
        mail = Mail.new(from, subject, to, content)
        
        sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
        response = sg.client.mail._('send').post(request_body: mail.to_json)
        puts response.status_code
        puts response.body
        puts response.headers
      end
end
