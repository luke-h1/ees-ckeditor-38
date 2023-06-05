﻿using System;
using System.Threading.Tasks;
using GovUk.Education.ExploreEducationStatistics.Admin.Services.Interfaces;
using GovUk.Education.ExploreEducationStatistics.Admin.ViewModels;
using GovUk.Education.ExploreEducationStatistics.Common.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GovUk.Education.ExploreEducationStatistics.Admin.Controllers.Api
{
    [Route("api")]
    [Authorize]
    [ApiController]
    public class ReleaseImageController : ControllerBase
    {
        private readonly IReleaseImageService _releaseImageService;

        public ReleaseImageController(IReleaseImageService releaseImageService)
        {
            _releaseImageService = releaseImageService;
        }

        [HttpPost("releases/{releaseId}/images")]
        [RequestSizeLimit(int.MaxValue)]
        [RequestFormLimits(ValueLengthLimit = int.MaxValue, MultipartBodyLengthLimit = int.MaxValue)]
        public async Task<ActionResult<ImageFileViewModel>> Upload(Guid releaseId, IFormFile file)
        {
            return await _releaseImageService
                .Upload(releaseId, file)
                .HandleFailuresOrOk();
        }

        /// <summary>
        /// Stream a release image.
        /// Image tags exist within HTML generated by the content editor.
        /// Anonymous access is allowed here since these requests have no authentication token.
        /// Adding one would require parsing the HTML into React DOM nodes.
        /// </summary>
        /// <param name="releaseId"></param>
        /// <param name="fileId"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpGet("releases/{releaseId}/images/{fileId}")]
        public async Task<ActionResult> Stream(Guid releaseId, Guid fileId)
        {
            return await _releaseImageService
                .Stream(releaseId: releaseId, fileId: fileId)
                .HandleFailures();
        }
    }
}
