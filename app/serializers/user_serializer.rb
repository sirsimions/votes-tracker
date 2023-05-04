class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :mobNo, :password_digest
  
end
