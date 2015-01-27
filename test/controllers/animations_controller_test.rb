require 'test_helper'

class AnimationsControllerTest < ActionController::TestCase
  test "should get logoAnim" do
    get :logoAnim
    assert_response :success
  end

end
