class VoteSerializer < ActiveModel::Serializer
  attributes :id, :county, :pollingStation, :votes
  
end
