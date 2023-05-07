class VotesController < ApplicationController
  wrap_parameters format: []
    def index
        requested_units=Vote.all
        render json: requested_units
      end
      def show
        requested_unit = Vote.find_by(id:params[:id])
        render json: requested_unit
      end
      def destroy
        requested_unit=Vote.find_by(id:params[:id])
        requested_unit.destroy
        head :no_content
      end
      def create
        requested_unit=Vote.create!(request_unit_params)
        render json: requested_unit,status: :created
      end
      def update
        requested_unit = Vote.find_by(id: params[:id])
          if requested_unit
            requested_unit.update(request_unit_params)
            render json: requested_unit,status: :created
          else
            render json: { error: "Vote not found"}, status: :not_found
          end
       end
      private
      def request_unit_params
        params.permit(:county,:pollingStation,:votes)
      end
end
