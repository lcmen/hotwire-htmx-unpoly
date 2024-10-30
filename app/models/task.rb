class Task < ApplicationRecord
  validates :title, presence: true

  def complete!
    update!(done: true)
  end

  def uncomplete!
    update!(done: false)
  end
end
