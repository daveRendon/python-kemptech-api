Search.setIndex({docnames:["bin","bin.activate_this","bin.conf","bin.convert_xmls_to_jsons","bin.generate_xml_responses","index","modules","python_kemptech_api","python_kemptech_api.api_xml","python_kemptech_api.capabilities","python_kemptech_api.client","python_kemptech_api.exceptions","python_kemptech_api.generic","python_kemptech_api.models","python_kemptech_api.objects","python_kemptech_api.utils","setup","tests","tests.integration","tests.integration.test_xml_to_json","tests.unit","tests.unit.test_api_xml","tests.unit.test_build_virtual_service","tests.unit.test_client","tests.unit.test_exceptions","tests.unit.test_kemp_base_object_model","tests.unit.test_loadmaster","tests.unit.test_real_server","tests.unit.test_utils","tests.unit.test_virtual_service"],envversion:51,filenames:["bin.rst","bin.activate_this.rst","bin.conf.rst","bin.convert_xmls_to_jsons.rst","bin.generate_xml_responses.rst","index.rst","modules.rst","python_kemptech_api.rst","python_kemptech_api.api_xml.rst","python_kemptech_api.capabilities.rst","python_kemptech_api.client.rst","python_kemptech_api.exceptions.rst","python_kemptech_api.generic.rst","python_kemptech_api.models.rst","python_kemptech_api.objects.rst","python_kemptech_api.utils.rst","setup.rst","tests.rst","tests.integration.rst","tests.integration.test_xml_to_json.rst","tests.unit.rst","tests.unit.test_api_xml.rst","tests.unit.test_build_virtual_service.rst","tests.unit.test_client.rst","tests.unit.test_exceptions.rst","tests.unit.test_kemp_base_object_model.rst","tests.unit.test_loadmaster.rst","tests.unit.test_real_server.rst","tests.unit.test_utils.rst","tests.unit.test_virtual_service.rst"],objects:{"":{bin:[0,0,0,"-"],python_kemptech_api:[7,0,0,"-"],tests:[17,0,0,"-"]},"bin.conf":{ConversionFailureError:[2,1,1,""],clear_dir:[2,2,1,""],convert_to_dict:[2,2,1,""],convert_to_json:[2,2,1,""]},"python_kemptech_api.api_xml":{get_data:[8,2,1,""],get_data_field:[8,2,1,""],get_error_msg:[8,2,1,""],get_success_msg:[8,2,1,""],is_successful:[8,2,1,""],parse_to_dict:[8,2,1,""]},"python_kemptech_api.exceptions":{ApiNotEnabledError:[11,1,1,""],BackupFailed:[11,1,1,""],CertificateMissingLoadmasterInfo:[11,1,1,""],CipherListInvalid:[11,1,1,""],ClusterMissingLoadmasterInfo:[11,1,1,""],CommandNotAvailableException:[11,1,1,""],ConnectionTimeoutException:[11,1,1,""],DownloadUserCertFailed:[11,1,1,""],FqdnMissingLoadmasterInfo:[11,1,1,""],GenericObjectMissingLoadMasterInfo:[11,1,1,""],HTTPError:[11,1,1,""],KempConnectionError:[11,1,1,""],KempTechApiException:[11,1,1,""],LoadMasterParameterError:[11,1,1,""],MissingInfo:[11,1,1,""],NotVirtualServiceInstanceError:[11,1,1,""],RangeMaskInvalid:[11,1,1,""],RangeMissingLoadmasterInfo:[11,1,1,""],RealServerMissingLoadmasterInfo:[11,1,1,""],RealServerMissingVirtualServiceInfo:[11,1,1,""],RealServerParameterError:[11,1,1,""],RuleMissingLoadmasterInfo:[11,1,1,""],SiteMissingFQDNInfo:[11,1,1,""],SiteMissingLoadmasterInfo:[11,1,1,""],SubVsCannotCreateSubVs:[11,1,1,""],TemplateMissingLoadmasterInfo:[11,1,1,""],TimeoutException:[11,1,1,""],TooManyRedirectsException:[11,1,1,""],UnauthorizedAccessError:[11,1,1,""],UrlRequiredError:[11,1,1,""],UserAlreadyExistsException:[11,1,1,""],ValidationError:[11,1,1,""],VirtualServiceACLMissingVirtualServiceInfo:[11,1,1,""],VirtualServiceMissingLoadmasterInfo:[11,1,1,""],VirtualServiceParameterError:[11,1,1,""],get_api_exception_message:[11,2,1,""],get_parameter_message:[11,2,1,""]},"python_kemptech_api.exceptions.CertificateMissingLoadmasterInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.exceptions.ClusterMissingLoadmasterInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.exceptions.FqdnMissingLoadmasterInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.exceptions.MissingInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.exceptions.RangeMissingLoadmasterInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.exceptions.RealServerMissingLoadmasterInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.exceptions.RealServerMissingVirtualServiceInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.exceptions.RuleMissingLoadmasterInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.exceptions.SiteMissingFQDNInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.exceptions.SiteMissingLoadmasterInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.exceptions.TemplateMissingLoadmasterInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.exceptions.VirtualServiceACLMissingVirtualServiceInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.exceptions.VirtualServiceMissingLoadmasterInfo":{param_name:[11,3,1,""],service:[11,3,1,""]},"python_kemptech_api.generic":{AccessInfoMixin:[12,4,1,""],BaseKempObject:[12,4,1,""],HttpClient:[12,4,1,""]},"python_kemptech_api.generic.AccessInfoMixin":{access_info:[12,3,1,""],cert:[12,3,1,""],endpoint:[12,3,1,""],ip_address:[12,3,1,""]},"python_kemptech_api.generic.BaseKempObject":{"delete":[12,5,1,""],API_INIT_PARAMS:[12,3,1,""],API_TAG:[12,3,1,""],access_info:[12,3,1,""],populate_default_attributes:[12,5,1,""],refresh:[12,5,1,""],save:[12,5,1,""],to_api_dict:[12,5,1,""],to_dict:[12,5,1,""],update:[12,5,1,""]},"python_kemptech_api.generic.HttpClient":{endpoint:[12,3,1,""],ip_address:[12,3,1,""]},"python_kemptech_api.models":{BaseKempAppliance:[13,4,1,""],Geo:[13,4,1,""],LoadMaster:[13,4,1,""],LoadMasterGeo:[13,4,1,""]},"python_kemptech_api.models.BaseKempAppliance":{accept_eula:[13,5,1,""],acl:[13,3,1,""],add_local_user:[13,5,1,""],alsi_license:[13,5,1,""],backup:[13,5,1,""],capabilities:[13,3,1,""],change_bal_password:[13,5,1,""],delete_local_user:[13,5,1,""],download_logs:[13,5,1,""],download_user_cert:[13,5,1,""],enable_api:[13,5,1,""],endpoint:[13,3,1,""],get_all_parameters:[13,5,1,""],get_diagnostic:[13,5,1,""],get_eula:[13,5,1,""],get_global_acl:[13,5,1,""],get_interface:[13,5,1,""],get_interfaces:[13,5,1,""],get_license_info:[13,5,1,""],get_parameter:[13,5,1,""],initial_license:[13,5,1,""],initial_password:[13,5,1,""],interfaces:[13,3,1,""],kill_asl_instance:[13,5,1,""],license:[13,3,1,""],list_addons:[13,5,1,""],new_user_cert:[13,5,1,""],offline_license:[13,5,1,""],ping:[13,5,1,""],reboot:[13,5,1,""],refresh_dns:[13,5,1,""],reset_logs:[13,5,1,""],restore_backup:[13,5,1,""],restore_firmware:[13,5,1,""],set_callhome:[13,5,1,""],set_initial_password:[13,5,1,""],set_parameter:[13,5,1,""],set_user_perms:[13,5,1,""],shutdown:[13,5,1,""],stats:[13,5,1,""],update_firmware:[13,5,1,""]},"python_kemptech_api.models.Geo":{acl_autoinstall:[13,3,1,""],acl_autoupdate:[13,3,1,""],acl_blacklist:[13,3,1,""],acl_changes:[13,3,1,""],acl_download:[13,3,1,""],acl_install:[13,5,1,""],acl_installtime:[13,3,1,""],acl_lastinstalled:[13,3,1,""],acl_lastupdated:[13,3,1,""],acl_update:[13,5,1,""],acl_whitelist:[13,3,1,""],add_acl:[13,5,1,""],build_cluster:[13,5,1,""],build_customlocation:[13,5,1,""],build_range:[13,5,1,""],clusters:[13,3,1,""],create_cluster:[13,5,1,""],create_customlocation:[13,5,1,""],create_fqdn:[13,5,1,""],create_range:[13,5,1,""],customlocations:[13,3,1,""],disable_geo:[13,5,1,""],enable_geo:[13,5,1,""],fqdns:[13,3,1,""],get_acl:[13,5,1,""],get_acl_settings:[13,5,1,""],get_cluster:[13,5,1,""],get_clusters:[13,5,1,""],get_customlocation:[13,5,1,""],get_customlocations:[13,5,1,""],get_fqdn:[13,5,1,""],get_fqdns:[13,5,1,""],get_geo_parameter:[13,5,1,""],get_range:[13,5,1,""],get_ranges:[13,5,1,""],ipranges:[13,3,1,""],remove_acl:[13,5,1,""],set_acl:[13,5,1,""],set_acl_settings:[13,5,1,""],set_geo_parameter:[13,5,1,""]},"python_kemptech_api.models.LoadMaster":{apply_template:[13,5,1,""],build_certificate:[13,5,1,""],build_intermediate_certificate:[13,5,1,""],build_sso:[13,5,1,""],build_virtual_service:[13,5,1,""],certificates:[13,3,1,""],clone_virtual_service:[13,5,1,""],create_certificate:[13,5,1,""],create_cipherset:[13,5,1,""],create_intermediate_certificate:[13,5,1,""],create_rule:[13,5,1,""],create_sso:[13,5,1,""],create_template:[13,5,1,""],create_virtual_service:[13,5,1,""],delete_template:[13,5,1,""],get_adaptive_parameters:[13,5,1,""],get_all_objects:[13,5,1,""],get_certificates:[13,5,1,""],get_check_parameters:[13,5,1,""],get_intermediate_certificates:[13,5,1,""],get_rule:[13,5,1,""],get_rules:[13,5,1,""],get_sdn_controller:[13,5,1,""],get_sdn_info:[13,5,1,""],get_sso:[13,5,1,""],get_ssos:[13,5,1,""],get_template:[13,5,1,""],get_templates:[13,5,1,""],get_virtual_service:[13,5,1,""],get_virtual_services:[13,5,1,""],list_templates:[13,5,1,""],rules:[13,3,1,""],set_adaptive_parameters:[13,5,1,""],set_check_parameters:[13,5,1,""],sso:[13,3,1,""],templates:[13,3,1,""],upload_template:[13,5,1,""],vs:[13,3,1,""]},"python_kemptech_api.objects":{BaseACLObject:[14,4,1,""],Certificate:[14,4,1,""],CipherSet:[14,4,1,""],Cluster:[14,4,1,""],CustomLocation:[14,4,1,""],Fqdn:[14,4,1,""],GlobalACL:[14,4,1,""],Interface:[14,4,1,""],IntermediateCertificate:[14,4,1,""],Range:[14,4,1,""],RealServer:[14,4,1,""],Rule:[14,4,1,""],Site:[14,4,1,""],Sso:[14,4,1,""],Template:[14,4,1,""],VirtualService:[14,4,1,""],VirtualServiceACL:[14,4,1,""]},"python_kemptech_api.objects.BaseACLObject":{API_INIT_PARAMS:[14,3,1,""],refresh:[14,5,1,""],save:[14,5,1,""]},"python_kemptech_api.objects.Certificate":{"delete":[14,5,1,""],populate_default_attributes:[14,5,1,""],save:[14,5,1,""]},"python_kemptech_api.objects.CipherSet":{"delete":[14,5,1,""],save:[14,5,1,""]},"python_kemptech_api.objects.Cluster":{API_INIT_PARAMS:[14,3,1,""],API_TAG:[14,3,1,""],populate_default_attributes:[14,5,1,""],save:[14,5,1,""]},"python_kemptech_api.objects.CustomLocation":{"delete":[14,5,1,""],save:[14,5,1,""]},"python_kemptech_api.objects.Fqdn":{API_INIT_PARAMS:[14,3,1,""],API_TAG:[14,3,1,""],build_site:[14,5,1,""],create_site:[14,5,1,""],get_site:[14,5,1,""],get_sites:[14,5,1,""],populate_default_attributes:[14,5,1,""],save:[14,5,1,""],sites:[14,3,1,""]},"python_kemptech_api.objects.Interface":{API_INIT_PARAMS:[14,3,1,""],API_TAG:[14,3,1,""],address:[14,3,1,""],cidr:[14,3,1,""],populate_default_attributes:[14,5,1,""],save:[14,5,1,""],set_additionaladdresses:[14,5,1,""],stats:[14,5,1,""]},"python_kemptech_api.objects.IntermediateCertificate":{"delete":[14,5,1,""],save:[14,5,1,""]},"python_kemptech_api.objects.Range":{API_INIT_PARAMS:[14,3,1,""],API_TAG:[14,3,1,""],latitude:[14,3,1,""],longitude:[14,3,1,""],populate_default_attributes:[14,5,1,""],save:[14,5,1,""]},"python_kemptech_api.objects.RealServer":{API_INIT_PARAMS:[14,3,1,""],API_TAG:[14,3,1,""],rs:[14,3,1,""],save:[14,5,1,""],to_api_dict:[14,5,1,""]},"python_kemptech_api.objects.Rule":{API_INIT_PARAMS:[14,3,1,""],populate_default_attributes:[14,5,1,""],type_string:[14,3,1,""]},"python_kemptech_api.objects.Site":{API_INIT_PARAMS:[14,3,1,""],API_TAG:[14,3,1,""],add_location:[14,5,1,""],ipaddress:[14,3,1,""],locations:[14,3,1,""],mappedaddress:[14,3,1,""],mappedport:[14,3,1,""],populate_default_attributes:[14,5,1,""],refresh:[14,5,1,""],remove_location:[14,5,1,""],save:[14,5,1,""],set_coordinates:[14,5,1,""],set_locations:[14,5,1,""]},"python_kemptech_api.objects.Sso":{"delete":[14,5,1,""],populate_default_attributes:[14,5,1,""],save:[14,5,1,""]},"python_kemptech_api.objects.Template":{API_INIT_PARAMS:[14,3,1,""],API_TAG:[14,3,1,""],save:[14,5,1,""]},"python_kemptech_api.objects.VirtualService":{"export":[14,5,1,""],API_INIT_PARAMS:[14,3,1,""],API_TAG:[14,3,1,""],acl:[14,3,1,""],build_real_server:[14,5,1,""],checkuse1_1:[14,3,1,""],create_access_control:[14,5,1,""],create_real_server:[14,5,1,""],create_sub_virtual_service:[14,5,1,""],get_real_server:[14,5,1,""],get_real_servers:[14,5,1,""],get_vs_acl:[14,5,1,""],populate_default_attributes:[14,5,1,""],save:[14,5,1,""],servers:[14,3,1,""],to_api_dict:[14,5,1,""]},"python_kemptech_api.utils":{UseTlsAdapter:[15,4,1,""],build_object:[15,2,1,""],cast_to_list:[15,2,1,""],falsey_to_none:[15,2,1,""],get_api_bool_string:[15,2,1,""],get_dict_entry_as_list:[15,2,1,""],get_sub_vs_list_from_data:[15,2,1,""],list_object:[15,2,1,""],send_response:[15,2,1,""],validate_ip:[15,2,1,""],validate_port:[15,2,1,""],validate_protocol:[15,2,1,""]},"python_kemptech_api.utils.UseTlsAdapter":{init_poolmanager:[15,5,1,""],tls_version:[15,3,1,""]},"tests.integration":{test_xml_to_json:[19,0,0,"-"]},"tests.integration.test_xml_to_json":{CompareError:[19,1,1,""],compare:[19,2,1,""],ordered:[19,2,1,""],test_all:[19,2,1,""]},"tests.unit":{test_api_xml:[21,0,0,"-"],test_build_virtual_service:[22,0,0,"-"],test_client:[23,0,0,"-"],test_exceptions:[24,0,0,"-"],test_kemp_base_object_model:[25,0,0,"-"],test_loadmaster:[26,0,0,"-"],test_real_server:[27,0,0,"-"],test_utils:[28,0,0,"-"],test_virtual_service:[29,0,0,"-"]},"tests.unit.test_api_xml":{test_get_data_field:[21,2,1,""],test_get_data_no_Data_key:[21,2,1,""],test_get_data_ok:[21,2,1,""],test_get_error_msg:[21,2,1,""],test_get_success_msg:[21,2,1,""],test_get_xml_field_ExpatError_returns_empty_dict:[21,2,1,""],test_get_xml_field_no_data_field:[21,2,1,""],test_get_xml_field_with_KeyError:[21,2,1,""],test_get_xml_field_with_data_field:[21,2,1,""],test_is_successful_None:[21,2,1,""],test_is_successful_str:[21,2,1,""]},"tests.unit.test_build_virtual_service":{Test_build_virtual_service:[22,4,1,""]},"tests.unit.test_build_virtual_service.Test_build_virtual_service":{test_build_virtual_service_with_sub_vs:[22,5,1,""],test_build_virtual_service_with_top_level_vs:[22,5,1,""]},"tests.unit.test_client":{MyError:[23,1,1,""],Test_HttpClient_as_context_manager:[23,4,1,""],Test_HttpClient_do_request:[23,4,1,""],Test_KempBaseObjectModel:[23,4,1,""],Test_LoadMaster:[23,4,1,""]},"tests.unit.test_client.Test_HttpClient_as_context_manager":{test_context_manager_enter:[23,5,1,""],test_context_manager_exit:[23,5,1,""]},"tests.unit.test_client.Test_HttpClient_do_request":{setup:[23,5,1,""],teardown:[23,5,1,""],test_400_status_code:[23,5,1,""],test_401_status_code:[23,5,1,""],test_ConnectionTimeoutException:[23,5,1,""],test_HttpError:[23,5,1,""],test_file_parameter_set:[23,5,1,""],test_no_file_parameter_set:[23,5,1,""],test_re_raised_exceptions:[23,5,1,""]},"tests.unit.test_client.Test_KempBaseObjectModel":{test_to_api_dict:[23,5,1,""]},"tests.unit.test_client.Test_LoadMaster":{test__get_curl_command_list:[23,5,1,""],test__get_curl_command_list_with_cert:[23,5,1,""],test_build_virtual_server:[23,5,1,""]},"tests.unit.test_exceptions":{Test_MissingInfo:[24,4,1,""],Test_get_api_exception_message:[24,4,1,""],Test_get_parameter_message:[24,4,1,""],check_exception_init:[24,2,1,""],get_exception_classes_gen:[24,2,1,""],test_check_exception_init_fails_if_syntax_error:[24,2,1,""],test_check_exception_init_ok:[24,2,1,""],test_exception_inits:[24,2,1,""],test_status_code_is_set:[24,2,1,""]},"tests.unit.test_exceptions.Test_MissingInfo":{test_call:[24,5,1,""]},"tests.unit.test_exceptions.Test_get_api_exception_message":{setup:[24,5,1,""],teardown:[24,5,1,""],test_msg_None_status_code_fail:[24,5,1,""],test_msg_None_status_code_ok:[24,5,1,""],test_msg_str_is_xml_msg:[24,5,1,""],test_msg_str_not_xml_msg:[24,5,1,""]},"tests.unit.test_exceptions.Test_get_parameter_message":{test_dict_input:[24,5,1,""],test_non_dict_input:[24,5,1,""]},"tests.unit.test_kemp_base_object_model":{Test_KempBaseObjectModel:[25,4,1,""]},"tests.unit.test_kemp_base_object_model.Test_KempBaseObjectModel":{test_repr:[25,5,1,""],test_to_api_dict:[25,5,1,""]},"tests.unit.test_loadmaster":{TestLmApiWrapperCalls:[26,4,1,""],Test_get_parameter:[26,4,1,""],Test_get_virtual_service:[26,4,1,""],Test_set_parameter:[26,4,1,""],Test_virtual_service_crud:[26,4,1,""],test_endpoint:[26,2,1,""],test_repr:[26,2,1,""],test_send_response_fail:[26,2,1,""],test_send_response_ok:[26,2,1,""]},"tests.unit.test_loadmaster.TestLmApiWrapperCalls":{setup:[26,5,1,""],teardown:[26,5,1,""],test_add_local_user:[26,5,1,""],test_alsi_license:[26,5,1,""],test_delete_local_user:[26,5,1,""],test_delete_template:[26,5,1,""],test_enable_api_exception:[26,5,1,""],test_get_interfaces_if_stats_fails_raise_exception:[26,5,1,""],test_get_interfaces_new_showiface:[26,5,1,""],test_get_interfaces_new_showiface_unset_iface_bug:[26,5,1,""],test_get_interfaces_raises_non_422_exceptions:[26,5,1,""],test_get_interfaces_when_new_showiface_doesnt_exist:[26,5,1,""],test_get_license_info:[26,5,1,""],test_get_sdn_controller:[26,5,1,""],test_get_sdn_info:[26,5,1,""],test_kill_asl_instance:[26,5,1,""],test_list_addons:[26,5,1,""],test_new_enable_api_url:[26,5,1,""],test_new_enable_api_url_wrong_credentials:[26,5,1,""],test_new_user_cert:[26,5,1,""],test_old_enable_api_url:[26,5,1,""],test_old_enable_api_url_logout_fails:[26,5,1,""],test_old_enable_api_url_wrong_credentials:[26,5,1,""],test_operator_overloads:[26,5,1,""],test_operator_overloads_fail_case:[26,5,1,""],test_reboot:[26,5,1,""],test_restore_backup:[26,5,1,""],test_restore_firmware:[26,5,1,""],test_set_initial_password:[26,5,1,""],test_set_user_perms_as_list:[26,5,1,""],test_set_user_perms_as_string:[26,5,1,""],test_shutdown:[26,5,1,""],test_stats:[26,5,1,""],test_update_firmware:[26,5,1,""],test_upload_template:[26,5,1,""]},"tests.unit.test_loadmaster.Test_get_parameter":{setup:[26,5,1,""],teardown:[26,5,1,""],test_dict:[26,5,1,""],test_str:[26,5,1,""]},"tests.unit.test_loadmaster.Test_get_virtual_service":{setup:[26,5,1,""],test_with_index:[26,5,1,""],test_without_index:[26,5,1,""]},"tests.unit.test_loadmaster.Test_set_parameter":{setup:[26,5,1,""],teardown:[26,5,1,""],test_fail:[26,5,1,""],test_ok:[26,5,1,""]},"tests.unit.test_loadmaster.Test_virtual_service_crud":{setup:[26,5,1,""],test_create_virtual_service_factory:[26,5,1,""],test_no_data_exists:[26,5,1,""]},"tests.unit.test_real_server":{Test_RealServer:[27,4,1,""]},"tests.unit.test_real_server.Test_RealServer":{setup:[27,5,1,""],test_get_base_parameters:[27,5,1,""],test_init_with_no_endpoint:[27,5,1,""],test_init_with_no_ipaddress:[27,5,1,""],test_init_with_vs:[27,5,1,""],test_str:[27,5,1,""],test_to_api_dict:[27,5,1,""]},"tests.unit.test_utils":{Test_validate_ip:[28,4,1,""],Test_validate_port:[28,4,1,""],Test_validate_protocol:[28,4,1,""],test_falsey_to_none:[28,2,1,""],test_list_object:[28,2,1,""]},"tests.unit.test_utils.Test_validate_ip":{test_invalid_str:[28,5,1,""],test_none:[28,5,1,""],test_ok:[28,5,1,""]},"tests.unit.test_utils.Test_validate_port":{test_non_integer:[28,5,1,""],test_ok:[28,5,1,""],test_out_of_range:[28,5,1,""],test_wildcard_port:[28,5,1,""]},"tests.unit.test_utils.Test_validate_protocol":{test_TCP:[28,5,1,""],test_invalid:[28,5,1,""],test_udp:[28,5,1,""]},"tests.unit.test_virtual_service":{Test_VirtualService:[29,4,1,""],Test_build_real_server:[29,4,1,""],Test_get_real_server:[29,4,1,""],Test_get_real_servers:[29,4,1,""]},"tests.unit.test_virtual_service.Test_VirtualService":{setup:[29,5,1,""],test_create_sub_virtual_service:[29,5,1,""],test_get_base_parameters:[29,5,1,""],test_init_with_no_endpoint:[29,5,1,""],test_init_with_no_ipaddress:[29,5,1,""],test_save_add_normal_vs:[29,5,1,""],test_save_add_sub_vs:[29,5,1,""],test_save_update_sub_vs:[29,5,1,""],test_str:[29,5,1,""],test_subvs_cant_create_sub_virtual_service:[29,5,1,""],test_to_api_dict:[29,5,1,""],test_to_dict:[29,5,1,""],test_vs_save_certfile_None:[29,5,1,""],test_vs_save_certfile_list:[29,5,1,""],test_vs_save_certfile_str:[29,5,1,""],test_vs_save_persist:[29,5,1,""]},"tests.unit.test_virtual_service.Test_build_real_server":{setup:[29,5,1,""],test_no_Addr:[29,5,1,""],test_no_Port:[29,5,1,""],test_ok:[29,5,1,""]},"tests.unit.test_virtual_service.Test_get_real_server":{setup:[29,5,1,""],test_with_index_invalid_port:[29,5,1,""],test_with_index_ok:[29,5,1,""],test_without_index_invalid_port:[29,5,1,""],test_without_index_ok:[29,5,1,""]},"tests.unit.test_virtual_service.Test_get_real_servers":{setup:[29,5,1,""],test_data_exists:[29,5,1,""],test_no_data_exists:[29,5,1,""]},bin:{conf:[2,0,0,"-"]},python_kemptech_api:{api_xml:[8,0,0,"-"],capabilities:[9,0,0,"-"],client:[10,0,0,"-"],exceptions:[11,0,0,"-"],generic:[12,0,0,"-"],models:[13,0,0,"-"],objects:[14,0,0,"-"],utils:[15,0,0,"-"]},tests:{integration:[18,0,0,"-"],unit:[20,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","exception","Python exception"],"2":["py","function","Python function"],"3":["py","attribute","Python attribute"],"4":["py","class","Python class"],"5":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:exception","2":"py:function","3":"py:attribute","4":"py:class","5":"py:method"},terms:{"2foural":13,"class":[12,13,14,15,22,23,24,25,26,27,28,29],"default":[12,13,14,15],"export":14,"function":[8,15],"new":13,"return":[8,12,13,15],"true":[8,11,13,14],"try":13,"var":15,IDs:15,The:[13,14,15],__init__:24,_api_ignor:12,_sslmethod:12,abl:14,accept_eula:13,access:[14,15],access_info:[12,15],accesscontrol:14,accessinfomixin:[12,13],acl:[13,14],acl_autoinstal:13,acl_autoupd:13,acl_blacklist:13,acl_chang:13,acl_download:13,acl_instal:13,acl_installtim:13,acl_lastinstal:13,acl_lastupd:13,acl_upd:13,acl_whitelist:13,act:13,activate_thi:[0,6],adapt:15,adaptiveinterv:13,adaptiveport:13,adaptiveurl:13,add:13,add_acl:13,add_loc:14,add_local_us:13,addr:14,address:[13,14],addv:14,adir:2,against:14,all:[13,24],allow:[14,15],alreadi:15,alsi_licens:13,also:12,alter:13,api:[12,13,14,15],api_bool:15,api_init_param:[12,14],api_tag:[12,14],api_xml:[5,6,7],apinotenablederror:11,apply_templ:13,assign:13,attach:[13,15],attempt:13,attribut:[12,13,14],autoinstal:13,autoupd:13,awful:8,backup:13,backup_typ:13,backupfail:11,base:[2,11,12,13,14,15,19,22,23,24,25,26,27,28,29],baseaclobject:14,basekempappli:13,basekempobject:[12,14,15],becaus:14,begin:12,bin:6,block:15,bool:15,build:15,build_certif:13,build_clust:13,build_customloc:13,build_intermediate_certif:13,build_object:15,build_rang:13,build_real_serv:14,build_sit:14,build_sso:13,build_virtual_servic:13,cach:13,call:13,callhom:13,can:[13,14,15],capabl:[5,6,7,13],cast:15,cast_to_list:15,cert:[12,13],certain:15,certfil:[13,14],certif:[11,13,14],certificatemissingloadmasterinfo:11,certifict:13,certnam:14,certpass:[13,14],change_bal_password:13,check:15,check_exception_init:24,checkuse1:14,checkuse1_1:14,cidr:14,cipher:[11,13,14],cipherlistinvalid:11,cipherset:14,cipherset_nam:[13,14],class_to_build:15,class_to_list:15,clear_dir:2,client:[5,6,7,12],clone:13,clone_virtual_servic:13,cluster:[11,13,14],clustermissingloadmasterinfo:11,cmd_name:11,cmd_url:11,code:11,commandnotavailableexcept:11,compar:19,compareerror:19,conf:[0,6],configur:[13,14],connect:[13,14,15],connectiontimeoutexcept:11,construct:24,constructor:14,contain:8,content:[2,5,6],conversionfailureerror:2,convert:[2,19],convert_to_dict:2,convert_to_json:2,convert_xmls_to_json:[0,6],correctli:24,creat:[13,14],create_access_control:14,create_certif:13,create_cipherset:13,create_clust:13,create_customloc:13,create_fqdn:13,create_intermediate_certif:13,create_rang:13,create_real_serv:14,create_rul:13,create_sit:14,create_sso:13,create_sub_virtual_servic:14,create_templ:13,create_virtual_servic:13,current:13,customloc:[13,14],data:[8,13,14,15],data_for_inst:15,defin:24,definit:14,delet:[12,14],delete_local_us:13,delete_templ:13,diagnost:13,dict:[2,8,12,13,15],dictionari:[13,14],disable_geo:13,doe:13,don:13,download_log:13,download_user_cert:13,downloadusercertfail:11,dry_run:13,each:13,els:8,enabl:13,enable_api:13,enable_geo:13,enableapi:13,encapsul:8,endpoint:[11,12,13],ensur:24,entri:[8,15],error:24,except:[2,5,6,7,19,23,24],exist:14,extra:13,factori:[13,14,15],fail:[11,13],fals:[8,12,13,14,15],falsei:15,falsey_to_non:15,field:8,file:[2,13,19],filenam:13,flag:14,fqdn:[11,13,14],fqdnmissingloadmasterinfo:11,from:[8,15,19],full:15,fullyqualifieddomainnam:14,gener:[5,6,7,13,14,24],generate_xml_respons:[0,6],genericobjectmissingloadmasterinfo:11,geo:13,get:[8,13,15],get_acl:13,get_acl_set:13,get_adaptive_paramet:13,get_all_object:13,get_all_paramet:13,get_api_bool_str:15,get_api_exception_messag:11,get_certif:13,get_check_paramet:13,get_clust:13,get_customloc:13,get_data:8,get_data_field:8,get_diagnost:13,get_dict_entry_as_list:15,get_error_msg:8,get_eula:13,get_exception_classes_gen:24,get_fqdn:13,get_geo_paramet:13,get_global_acl:13,get_interfac:13,get_intermediate_certif:13,get_license_info:13,get_paramet:13,get_parameter_messag:11,get_rang:13,get_real_serv:14,get_rul:13,get_sdn_control:13,get_sdn_info:13,get_sit:14,get_sso:13,get_sub_vs_list_from_data:15,get_success_msg:8,get_templ:13,get_virtual_servic:13,get_vs_acl:14,given:[13,15],globalacl:14,has:11,health_check_api:13,help:8,host:13,http:[11,12],httpadapt:15,httpclient:[12,13],httperror:11,ignor:12,immedi:13,includ:13,index:[5,13,14],info:15,inform:13,init_poolmanag:15,initi:13,initial_licens:13,initial_password:13,installtim:13,instanc:[12,13,14,15],integr:[6,17],interfac:[13,14],intermediatecertif:14,intern:14,invalid:15,ip_address:[11,12],ipaddress:14,iprang:13,is_contin:14,is_custom:14,is_sub_v:14,is_success:8,is_xml_msg:11,its:15,json:19,kei:[13,15],kemp:15,kemp_id:13,kempconnectionerror:11,kempid:13,kemptechapiexcept:11,kill_asl_inst:13,kwarg:[12,15],latitud:14,licens:13,license_fil:13,license_typ:13,list:[12,15],list_addon:13,list_object:15,list_templ:13,listv:13,liter:14,loadmast:[11,13,14],loadmaster_fqdn_info:14,loadmaster_info:[12,14],loadmaster_virt_service_info:14,loadmastergeo:13,loadmasterparametererror:[11,13],locat:[13,14],longitud:14,loop:13,lot:13,lowercas:13,machin:13,made:13,map:14,mappedaddress:14,mappedport:14,mark:14,mask:[11,13,14],maxsiz:15,method:[13,14,15],minperc:13,missinginfo:11,model:[5,6,7],modul:[5,6],msg:11,must:14,myerror:23,name:[12,13,14],new_password:13,new_user_cert:13,newli:14,next:24,nicknam:13,none:[11,12,13,14,15],notvirtualserviceinstanceerror:11,nullifi:13,obj:[11,14,19],object:[5,6,7,12,13,22,23,24,25,26,27,28,29],offline_licens:13,old:13,older:13,onli:13,oper:13,option:13,order:[14,19],ordereddict:[8,13],output:19,overwritten:14,packag:[5,6],page:5,pair:13,param:[11,12,13,14,15],param_nam:11,paramet:[11,13,14,15],parameter_nam:11,parent:[14,15],parse_to_dict:8,part:8,pass:[13,14],password:13,pattern:[13,14],perform:12,perm:13,ping:13,popul:[12,13,14,15],populate_default_attribut:[12,14],port:[13,14,15],portion:15,potenti:13,pre:[13,14],prog:13,properti:14,prot:14,protocol:[13,14,15],protocol_tlsv1_2:12,provid:8,python_kemptech_api:[5,6],radiu:13,rais:[11,13],rang:[11,13,14],rangemaskinvalid:11,rangemissingloadmasterinfo:11,real:[11,13],real_server_address:14,real_server_port:14,realserv:14,realservermissingloadmasterinfo:11,realservermissingvirtualserviceinfo:11,realserverparametererror:11,reboot:13,refer:19,refresh:[12,14],refresh_dn:13,relat:12,remove_acl:13,remove_loc:14,request:[11,12,15],reset_log:13,respons:[8,13,15],response_data:15,rest:13,restful:[13,15],restore_backup:13,restore_firmwar:13,retrycount:13,retryinterv:13,right:13,row:13,rule:[11,13,14],rulemissingloadmasterinfo:11,save:[12,13,14],search:5,send_respons:15,server:[11,13,14],servic:[11,13,14],set:13,set_acl:13,set_acl_set:13,set_adaptive_paramet:13,set_additionaladdress:14,set_callhom:13,set_check_paramet:13,set_coordin:14,set_geo_paramet:13,set_initial_password:13,set_loc:14,set_paramet:13,set_user_perm:13,setup:[6,23,24,26,27,29],should:15,shutdown:13,site:[11,14],sitemissingfqdninfo:11,sitemissingloadmasterinfo:11,sourc:[2,8,11,12,13,14,15,19,21,22,23,24,25,26,27,28,29],src:2,sso:[13,14],standard:[12,13,14],start:12,stat:[13,14],store:14,str:13,string:[14,15],sub:[14,15],subclass:15,submodul:[5,6,17],subpackag:6,subv:14,subvscannotcreatesubv:11,success:8,successfulli:13,syntax:24,take:15,tcp:[13,14],teardown:[23,24,26],templat:[11,13,14],template_nam:13,templatemissingloadmasterinfo:11,test:6,test_400_status_cod:23,test_401_status_cod:23,test__get_curl_command_list:23,test__get_curl_command_list_with_cert:23,test_add_local_us:26,test_al:19,test_alsi_licens:26,test_api_xml:[17,20],test_build_real_serv:29,test_build_virtual_serv:23,test_build_virtual_servic:[17,20],test_build_virtual_service_with_sub_v:22,test_build_virtual_service_with_top_level_v:22,test_cal:24,test_check_exception_init_fails_if_syntax_error:24,test_check_exception_init_ok:24,test_client:[17,20],test_connectiontimeoutexcept:23,test_context_manager_ent:23,test_context_manager_exit:23,test_create_sub_virtual_servic:29,test_create_virtual_service_factori:26,test_data_exist:29,test_delete_local_us:26,test_delete_templ:26,test_dict:26,test_dict_input:24,test_enable_api_except:26,test_endpoint:26,test_except:[17,20],test_exception_init:24,test_fail:26,test_falsey_to_non:28,test_file_parameter_set:23,test_get_api_exception_messag:24,test_get_base_paramet:[27,29],test_get_data_field:21,test_get_data_no_data_kei:21,test_get_data_ok:21,test_get_error_msg:21,test_get_interfaces_if_stats_fails_raise_except:26,test_get_interfaces_new_showifac:26,test_get_interfaces_new_showiface_unset_iface_bug:26,test_get_interfaces_raises_non_422_except:26,test_get_interfaces_when_new_showiface_doesnt_exist:26,test_get_license_info:26,test_get_paramet:26,test_get_parameter_messag:24,test_get_real_serv:29,test_get_sdn_control:26,test_get_sdn_info:26,test_get_success_msg:21,test_get_virtual_servic:26,test_get_xml_field_expaterror_returns_empty_dict:21,test_get_xml_field_no_data_field:21,test_get_xml_field_with_data_field:21,test_get_xml_field_with_keyerror:21,test_httpclient_as_context_manag:23,test_httpclient_do_request:23,test_httperror:23,test_init_with_no_endpoint:[27,29],test_init_with_no_ipaddress:[27,29],test_init_with_v:27,test_invalid:28,test_invalid_str:28,test_is_successful_non:21,test_is_successful_str:21,test_kemp_base_object_model:[17,20],test_kempbaseobjectmodel:[23,25],test_kill_asl_inst:26,test_list_addon:26,test_list_object:28,test_loadmast:[17,20,23],test_missinginfo:24,test_msg_none_status_code_fail:24,test_msg_none_status_code_ok:24,test_msg_str_is_xml_msg:24,test_msg_str_not_xml_msg:24,test_new_enable_api_url:26,test_new_enable_api_url_wrong_credenti:26,test_new_user_cert:26,test_no_addr:29,test_no_data_exist:[26,29],test_no_file_parameter_set:23,test_no_port:29,test_non:28,test_non_dict_input:24,test_non_integ:28,test_ok:[26,28,29],test_old_enable_api_url:26,test_old_enable_api_url_logout_fail:26,test_old_enable_api_url_wrong_credenti:26,test_operator_overload:26,test_operator_overloads_fail_cas:26,test_out_of_rang:28,test_re_raised_except:23,test_real_serv:[17,20],test_realserv:27,test_reboot:26,test_repr:[25,26],test_restore_backup:26,test_restore_firmwar:26,test_save_add_normal_v:29,test_save_add_sub_v:29,test_save_update_sub_v:29,test_send_response_fail:26,test_send_response_ok:26,test_set_initial_password:26,test_set_paramet:26,test_set_user_perms_as_list:26,test_set_user_perms_as_str:26,test_shutdown:26,test_stat:26,test_status_code_is_set:24,test_str:[26,27,29],test_subvs_cant_create_sub_virtual_servic:29,test_tcp:28,test_to_api_dict:[23,25,27,29],test_to_dict:29,test_udp:28,test_update_firmwar:26,test_upload_templ:26,test_util:[17,20],test_validate_ip:28,test_validate_port:28,test_validate_protocol:28,test_virtual_servic:[17,20],test_virtual_service_crud:26,test_virtualservic:29,test_vs_save_certfile_list:29,test_vs_save_certfile_non:29,test_vs_save_certfile_str:29,test_vs_save_persist:29,test_wildcard_port:28,test_with_index:26,test_with_index_invalid_port:29,test_with_index_ok:29,test_without_index:26,test_without_index_invalid_port:29,test_without_index_ok:29,test_xml_to_json:[17,18],testlmapiwrappercal:26,than:13,thei:15,thi:[13,14,15],tied:13,time:13,timeout:13,timeoutexcept:11,tls_version:[12,15],to_api_dict:[12,14],to_dict:12,toomanyredirectsexcept:11,trial:13,tupl:15,type:13,type_str:14,unauthorizedaccesserror:11,underscor:12,unit:[6,17],updat:[12,14],update_firmwar:13,upload_templ:13,url:13,urlrequirederror:11,used:14,user:[11,13],useralreadyexistsexcept:11,usernam:13,uses:14,usetlsadapt:15,using:13,util:[5,6,7],valid:13,validate_ip:15,validate_port:15,validate_protocol:15,validationerror:11,valu:[8,12,13,15],variabl:[14,15],verifi:13,version:15,virtual:[11,13,14],virtual_ip:13,virtualserivc:13,virtualservic:[13,14],virtualserviceacl:[11,14],virtualserviceaclmissingvirtualserviceinfo:11,virtualservicemissingloadmasterinfo:11,virtualserviceparametererror:11,vsaddress:14,vsport:14,vss:15,wai:13,want:13,when:[14,15],whose:12,without:24,work:13,write:14,xml:[2,8,19],yield:24,you:[13,14]},titles:["bin package","bin.activate_this module","bin.conf module","bin.convert_xmls_to_jsons module","bin.generate_xml_responses module","Welcome to python-kemptech-api&#8217;s documentation!","python-kemptech-api","python_kemptech_api package","python_kemptech_api.api_xml module","python_kemptech_api.capabilities module","python_kemptech_api.client module","python_kemptech_api.exceptions module","python_kemptech_api.generic module","python_kemptech_api.models module","python_kemptech_api.objects module","python_kemptech_api.utils module","setup module","tests package","tests.integration package","tests.integration.test_xml_to_json module","tests.unit package","tests.unit.test_api_xml module","tests.unit.test_build_virtual_service module","tests.unit.test_client module","tests.unit.test_exceptions module","tests.unit.test_kemp_base_object_model module","tests.unit.test_loadmaster module","tests.unit.test_real_server module","tests.unit.test_utils module","tests.unit.test_virtual_service module"],titleterms:{activate_thi:1,api:[5,6],api_xml:8,bin:[0,1,2,3,4],capabl:9,client:10,conf:2,content:[0,7,17,18,20],convert_xmls_to_json:3,document:5,except:11,gener:12,generate_xml_respons:4,indic:5,integr:[18,19],kemptech:[5,6],model:13,modul:[0,1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],object:14,packag:[0,7,17,18,20],python:[5,6],python_kemptech_api:[7,8,9,10,11,12,13,14,15],setup:16,submodul:[0,7,18,20],subpackag:[17,18],tabl:5,test:[17,18,19,20,21,22,23,24,25,26,27,28,29],test_api_xml:21,test_build_virtual_servic:22,test_client:23,test_except:24,test_kemp_base_object_model:25,test_loadmast:26,test_real_serv:27,test_util:28,test_virtual_servic:29,test_xml_to_json:19,unit:[20,21,22,23,24,25,26,27,28,29],util:15,welcom:5}})