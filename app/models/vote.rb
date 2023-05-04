class Vote < ApplicationRecord
    validates :county, presence: true
    validates :pollingStation, presence: true
    validates :votes, presence: true
end
