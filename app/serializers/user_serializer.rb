class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :mobno, :role, :password_digest
  
end
