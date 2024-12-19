class ApplicationController < ActionController::Base
  allow_browser versions: :modern
  default_form_builder ApplicationFormBuilder
  before_action :determine_variant

  inertia_share flash: -> { flash.to_hash }

  def index
    render :index, layout: false
  end

  private

  def determine_variant
    request.variant = params[:variant].to_sym if params.key?(:variant)
  end

  def redirect_to(path, **kwargs)
    respond_to do |format|
      format.html do |variant|
        variant.htmx { htmx_redirect(path, **kwargs) }
        variant.any { super }
      end
      format.turbo_stream { turbo_redirect(path, **kwargs) }
    end
  end

  def htmx_redirect(path, **kwargs)
    assign_flashes(**kwargs)
    headers["HX-Location"] = path
    render html: "", status: :no_content
  end

  def turbo_redirect(path, **kwargs)
    assign_flashes(**kwargs)
    render turbo_stream: turbo_stream.action(:redirect, path)
  end

  def assign_flashes(**kwargs)
    kwargs.each do |(type, value)|
      flash[type] = value if self.class._flash_types.include?(type)
    end
  end
end
