class VotesController < ApplicationController
  wrap_parameters format: []
    def index
        votes=Vote.all
        render json: votes
      end
      def show
        vote = Vote.find_by(id:params[:id])
        render json: vote
      end
      # def destroy
      #   @vote=Vote.find_by(id:params[:id])
      #   @vote.destroy
      #   head :no_content
      # end

      def destroy
        @vote = Vote.find(params[:id])
        if @vote.present?
          @vote.destroy
          head :no_content
          render json: {}
          return redirect_to (votes_path)
        end
        
    end
    

      def create
        vote=Vote.create!(vote_params)
        render json: vote,status: :created
      end
      def update
        vote = Vote.find_by(id: params[:id])
          if vote
            vote.update(vote_params)
            render json: vote,status: :created
          else
            render json: { error: "Vote not found"}, status: :not_found
          end
       end
      private
      def vote_params
        params.permit(:county,:pollingStation,:votes)
      end
end
