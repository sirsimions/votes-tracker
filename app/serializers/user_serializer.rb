class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :mobno, :password_digest
  
  
end
